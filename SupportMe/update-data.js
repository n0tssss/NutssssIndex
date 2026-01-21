/**
 * 数据更新脚本
 * 使用方法：在 SupportMe 目录下运行 node update-data.js
 * 功能：从 GitHub API 获取最新的仓库数据，更新 data.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// ========== 配置区域 ==========
const config = {
    // GitHub 用户名/组织名列表（支持多个）
    githubUsers: [
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
        "AnyRead",
        "IceCreamSearch",
        "EazyGiteeNote"
    ],
    // 支持者列表（手动维护）
    support: [
    ]
};
// ========== 配置区域结束 ==========

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
                    // 给每个仓库添加来源标记
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

async function main() {
    console.log('🚀 开始获取 GitHub 仓库数据...\n');

    try {
        // 获取所有用户/组织的仓库
        const allRepos = [];
        for (const user of config.githubUsers) {
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
            console.error('❌ 未获取到任何仓库数据');
            return;
        }

        // 按 star 数排序
        allRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);

        // 筛选项目
        let projects = [];
        const showAllUsers = config.showAllUsers || [];
        const projectNames = config.projectNames || [];

        allRepos.forEach(r => {
            // 如果是 showAllUsers 中的账号，展示全部
            if (showAllUsers.includes(r._source)) {
                projects.push({
                    name: r.name,
                    description: r.description || '暂无描述',
                    html_url: r.html_url,
                    stargazers_count: r.stargazers_count,
                    owner: r._source
                });
            }
            // 否则，只展示 projectNames 中指定的项目
            else if (projectNames.includes(r.name)) {
                projects.push({
                    name: r.name,
                    description: r.description || '暂无描述',
                    html_url: r.html_url,
                    stargazers_count: r.stargazers_count,
                    owner: r._source
                });
            }
        });

        // 如果两个配置都为空，则展示全部
        if (showAllUsers.length === 0 && projectNames.length === 0) {
            projects = allRepos.map(r => ({
                name: r.name,
                description: r.description || '暂无描述',
                html_url: r.html_url,
                stargazers_count: r.stargazers_count,
                owner: r._source
            }));
        }

        // 重新按 star 排序（因为上面的逻辑可能打乱顺序）
        projects.sort((a, b) => b.stargazers_count - a.stargazers_count);

        console.log(`\n✅ 共获取到 ${projects.length} 个项目:\n`);
        projects.forEach(p => {
            console.log(`   - [${p.owner}] ${p.name} (⭐ ${p.stargazers_count})`);
        });

        // 生成 data.js 内容
        const dataContent = `/*
 * @Description: 本地数据配置文件 - 由 update-data.js 自动生成
 * @LastUpdate: ${new Date().toLocaleString('zh-CN')}
 */

const projectData = {
    /**
     * 开源项目列表（自动从 GitHub 获取）
     */
    projects: ${JSON.stringify(projects, null, 8)},

    /**
     * 请我喝咖啡的支持者列表（手动维护）
     */
    support: ${JSON.stringify(config.support, null, 8)}
};
`;

        // 写入文件
        const dataPath = path.join(__dirname, 'js', 'data.js');
        fs.writeFileSync(dataPath, dataContent, 'utf8');

        console.log(`\n✅ 数据已更新到 js/data.js`);
        console.log('📅 更新时间:', new Date().toLocaleString('zh-CN'));

    } catch (error) {
        console.error('❌ 发生错误:', error.message);
    }
}

main();
