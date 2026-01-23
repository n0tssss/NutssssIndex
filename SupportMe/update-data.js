/**
 * 数据更新脚本
 * 使用方法：在 SupportMe 目录下运行 node update-data.js
 * 功能：
 *   1. 从 GitHub API 获取最新的仓库数据
 *   2. 从爱发电 API 获取赞助者数据
 *   3. 更新 data.js
 */

const https = require('https');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// ==================== 配置区域 ====================
// 
// 注意：网站显示的文字、作品等静态配置请修改 js/config.js
// 本文件只包含数据获取相关的配置（GitHub API、爱发电 API）
//
// ==================== 配置区域 ====================

const config = {
    // ========== GitHub 配置（用于获取开源项目数据） ==========
    github: {
        // 是否启用 GitHub 数据获取
        enabled: true,
        // GitHub 用户名/组织名列表（支持多个）
        users: [
            'n0tssss',
            'N0tsLabs'
        ],
        // 展示全部仓库的用户/组织（这些账号的所有仓库都会展示）
        showAllUsers: [
            'N0tsLabs'
        ],
        // 要展示的特定项目名称（对于不在 showAllUsers 中的账号生效）
        projectNames: [
            'NutssssIndex',
            'AnyRead',
            'IceCreamSearch',
            'EazyGiteeNote'
        ],
        // 不展示的仓库名称（黑名单，优先级最高）
        excludeProjects: [
            'N0tsLabs.github.io'
        ]
    },

    // ========== 爱发电配置（用于获取赞助者数据） ==========
    // 注意：爱发电用户名（用于跳转链接）请在 js/config.js 中配置
    afdian: {
        // 是否启用爱发电数据获取
        enabled: true,
        // 爱发电用户 ID（在 https://afdian.com/dashboard/dev 获取）
        userId: '',
        // 爱发电 API Token（在 https://afdian.com/dashboard/dev 获取）
        token: ''
    },

    // ========== 手动维护的支持者列表 ==========
    // 如果启用了爱发电，这里的数据会与爱发电数据合并
    // 格式：{ name: '昵称', money: 金额, msg: '留言', qq: 'QQ号(可选，用于头像)' }
    manualSupport: [
    ]
};

// ==================== 配置区域结束 ====================


/**
 * 获取 GitHub 仓库列表
 */
function fetchGitHubRepos(username) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'api.github.com',
            path: `/users/${username}/repos?sort=updated&per_page=100`,
            headers: {
                'User-Agent': 'Node.js'
            }
        };

        https.get(options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const result = JSON.parse(data);
                    if (Array.isArray(result)) {
                        result.forEach(r => r._source = username);
                    }
                    resolve(result);
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

/**
 * 爱发电 API 签名生成
 */
function generateAfdianSign(userId, token, params, ts) {
    const paramsJson = JSON.stringify(params);
    const signStr = `${token}params${paramsJson}ts${ts}user_id${userId}`;
    return crypto.createHash('md5').update(signStr).digest('hex');
}

/**
 * 获取爱发电赞助者列表
 */
function fetchAfdianSponsors(userId, token, page = 1) {
    return new Promise((resolve, reject) => {
        const ts = Math.floor(Date.now() / 1000);
        const params = { page };
        const sign = generateAfdianSign(userId, token, params, ts);

        const postData = JSON.stringify({
            user_id: userId,
            params: JSON.stringify(params),
            ts,
            sign
        });

        const options = {
            hostname: 'afdian.com',
            path: '/api/open/query-sponsor',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(postData)
            }
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    reject(e);
                }
            });
        });

        req.on('error', reject);
        req.write(postData);
        req.end();
    });
}

/**
 * 获取所有爱发电赞助者（自动分页）
 */
async function fetchAllAfdianSponsors(userId, token) {
    const allSponsors = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
        console.log(`   📄 正在获取第 ${page} 页...`);
        const result = await fetchAfdianSponsors(userId, token, page);

        if (result.ec !== 200) {
            throw new Error(result.em || '爱发电 API 请求失败');
        }

        const sponsors = result.data?.list || [];
        if (sponsors.length === 0) {
            hasMore = false;
        } else {
            allSponsors.push(...sponsors);
            // 爱发电每页最多返回 50 条
            if (sponsors.length < 50) {
                hasMore = false;
            } else {
                page++;
            }
        }
    }

    return allSponsors;
}

/**
 * 转换爱发电数据为本地格式
 */
function convertAfdianToLocal(sponsors) {
    return sponsors.map(sponsor => {
        // 计算总赞助金额（单位：分 -> 元）
        const totalMoney = parseFloat(sponsor.all_sum_amount) || 0;

        return {
            name: sponsor.user?.name || '匿名用户',
            money: totalMoney,
            msg: sponsor.last_pay_time ? `最近赞助: ${new Date(sponsor.last_pay_time * 1000).toLocaleDateString('zh-CN')}` : '',
            // 爱发电的头像
            avatar: sponsor.user?.avatar || '',
            // 来源标记
            _source: 'afdian'
        };
    });
}

/**
 * 获取 GitHub 项目数据
 */
async function getGitHubProjects() {
    if (!config.github.enabled) {
        console.log('⏭️  GitHub 数据获取已禁用\n');
        return [];
    }

    console.log('🚀 开始获取 GitHub 仓库数据...\n');

    const allRepos = [];
    for (const user of config.github.users) {
        console.log(`📦 正在获取 ${user} 的仓库...`);
        const repos = await fetchGitHubRepos(user);

        if (repos.message) {
            console.error(`   ❌ ${user}: ${repos.message}`);
            continue;
        }

        console.log(`   ✅ 获取到 ${repos.length} 个仓库`);
        allRepos.push(...repos);
    }

    if (allRepos.length === 0) {
        console.log('⚠️  未获取到任何仓库数据\n');
        return [];
    }

    // 按 star 数排序
    allRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);

    // 筛选项目
    let projects = [];
    const { showAllUsers, projectNames, excludeProjects } = config.github;

    allRepos.forEach(r => {
        // 黑名单优先级最高，直接跳过
        if (excludeProjects && excludeProjects.includes(r.name)) {
            return;
        }

        if (showAllUsers.includes(r._source)) {
            projects.push({
                name: r.name,
                description: r.description || '暂无描述',
                html_url: r.html_url,
                stargazers_count: r.stargazers_count,
                owner: r._source
            });
        } else if (projectNames.includes(r.name)) {
            projects.push({
                name: r.name,
                description: r.description || '暂无描述',
                html_url: r.html_url,
                stargazers_count: r.stargazers_count,
                owner: r._source
            });
        }
    });

    // 如果两个配置都为空，则展示全部（仍然排除黑名单）
    if (showAllUsers.length === 0 && projectNames.length === 0) {
        projects = allRepos
            .filter(r => !excludeProjects || !excludeProjects.includes(r.name))
            .map(r => ({
                name: r.name,
                description: r.description || '暂无描述',
                html_url: r.html_url,
                stargazers_count: r.stargazers_count,
                owner: r._source
            }));
    }

    // 重新按 star 排序
    projects.sort((a, b) => b.stargazers_count - a.stargazers_count);

    console.log(`\n✅ 共获取到 ${projects.length} 个项目:\n`);
    projects.forEach(p => {
        console.log(`   - [${p.owner}] ${p.name} (⭐ ${p.stargazers_count})`);
    });

    return projects;
}

/**
 * 获取支持者数据
 */
async function getSupporters() {
    let supporters = [];

    // 获取爱发电数据
    if (config.afdian.enabled) {
        if (!config.afdian.userId || !config.afdian.token) {
            console.log('\n⚠️  爱发电已启用但未配置 userId 或 token，跳过\n');
        } else {
            console.log('\n🚀 开始获取爱发电赞助者数据...\n');
            try {
                const afdianSponsors = await fetchAllAfdianSponsors(
                    config.afdian.userId,
                    config.afdian.token
                );
                const converted = convertAfdianToLocal(afdianSponsors);
                supporters.push(...converted);
                console.log(`\n✅ 从爱发电获取到 ${converted.length} 位赞助者\n`);
            } catch (error) {
                console.error(`\n❌ 爱发电数据获取失败: ${error.message}\n`);
            }
        }
    } else {
        console.log('\n⏭️  爱发电数据获取已禁用\n');
    }

    // 合并手动维护的支持者
    if (config.manualSupport.length > 0) {
        console.log(`📝 合并 ${config.manualSupport.length} 位手动维护的支持者\n`);
        supporters.push(...config.manualSupport);
    }

    // 按金额排序
    supporters.sort((a, b) => (b.money || 0) - (a.money || 0));

    if (supporters.length > 0) {
        console.log(`☕️ 支持者列表 (共 ${supporters.length} 位):\n`);
        supporters.forEach(s => {
            const source = s._source === 'afdian' ? '[爱发电]' : '[手动]';
            console.log(`   - ${source} ${s.name} (${s.money}￥)`);
        });
    }

    return supporters;
}

/**
 * 主函数
 */
async function main() {
    console.log('========================================');
    console.log('       SupportMe 数据更新脚本');
    console.log('========================================\n');

    try {
        // 获取项目数据
        const projects = await getGitHubProjects();

        // 获取支持者数据
        const supporters = await getSupporters();

        // 生成 data.js 内容（仅动态数据）
        const dataContent = `/*
 * @Description: 动态数据文件 - 由 update-data.js 自动生成，请勿手动修改
 * @LastUpdate: ${new Date().toLocaleString('zh-CN')}
 * 
 * 静态配置请修改 config.js
 */

const dynamicData = {
    /**
     * 开源项目列表（自动从 GitHub 获取）
     */
    projects: ${JSON.stringify(projects, null, 8)},

    /**
     * 支持者列表（自动从爱发电获取）
     * 数据来源: ${config.afdian.enabled ? '爱发电 API' : '手动维护'}
     */
    support: ${JSON.stringify(supporters, null, 8)}
};
`;

        // 写入文件
        const dataPath = path.join(__dirname, 'js', 'data.js');
        fs.writeFileSync(dataPath, dataContent, 'utf8');

        console.log('\n========================================');
        console.log('✅ 数据已更新到 js/data.js');
        console.log(`📅 更新时间: ${new Date().toLocaleString('zh-CN')}`);
        console.log(`📦 项目数量: ${projects.length}`);
        console.log(`☕️ 支持者数量: ${supporters.length}`);
        console.log('========================================\n');

    } catch (error) {
        console.error('\n❌ 发生错误:', error.message);
        process.exit(1);
    }
}

main();
