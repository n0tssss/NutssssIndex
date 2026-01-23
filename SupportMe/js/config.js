/*
 * @Description: 网站静态配置文件 - 手动维护
 * @FilePath: /SupportMe/js/config.js
 */

const siteConfig = {
    // ========== 网站基础配置 ==========
    site: {
        // 页面标题
        title: '支持我 | 请 N0ts 喝杯☕️',
        // 页面描述（SEO）
        description: '支持 N0ts 的开源项目，请我喝一杯咖啡',
        // 个人名称
        name: 'N0ts 🤪',
        // 角色/职位
        role: '全栈牛马人 🛠',
        // 个人介绍
        bio: [
            '我一直热衷于开发一些自己感兴趣以及对大家有帮助的玩意 🔨',
            '并且坚持开源免费的道路，主打与更多的伙伴互相学习共同提升 ✌'
        ],
        // 呼吁文案
        appeal: [
            '如果喜欢我的作品，请给我点个 Star ⭐️',
            '或提出您的宝贵建议 📝',
            '也可以请我喝杯咖啡 ☕️'
        ],
        // 支持按钮文字
        supportBtn: '👉 请我喝咖啡',
        // 区块标题
        sectionTitles: {
            works: '一些小玩意 🎨',
            projects: '开源 💻',
            supporters: '请我喝咖啡的大佬们 ☕️'
        },
        // 支持者描述
        supporterDesc: '感谢各位支持！',
        // 空状态提示
        emptyTip: '暂时还没有小伙伴支持，成为第一个吧~'
    },

    // ========== 爱发电配置 ==========
    // 爱发电用户名（用于跳转链接，如 https://afdian.com/a/n0ts）
    afdianUsername: 'n0ts',

    // ========== 作品配置 ==========
    // 格式：{ name: '名称', url: '链接', description: '介绍' }
    works: [
        { name: '主页', url: 'https://n0ts.top', description: '个人主页' },
        { name: 'Blog', url: 'https://blog.n0ts.top', description: '记录日常与技术的博客' },
        { name: '4Amy', url: 'https://4amy.love/', description: '情侣网站，记录点点滴滴' },
        { name: '路书规划', url: 'https://story.n0ts.top/', description: '想去哪，路书制作，路线规划，旅游用' },
        { name: 'C4', url: 'https://c4.n0ts.top/', description: '网页版 C4，Wargame 用' },
        { name: '笔记', url: 'https://note.n0ts.top/', description: '笔记小站，Gitee作为数据库' },
        { name: 'Nutscraft', url: 'https://mc.n0ts.top/', description: '我的世界服务器官网' },
        { name: '简历', url: 'https://me.n0ts.top/', description: '刚毕业的时候手撸的简历' },
        { name: 'IceCreamSearch', url: 'https://ice.n0ts.top/', description: '自己开发的浏览器主页' },
        { name: 'N0tsChat', url: 'https://chatgpt.n0ts.top/', description: 'AI 刚发布时候写的代理方便自己用' },
        { name: 'BeastyTac', url: 'https://beastytac.cn/', description: 'Wargame 战队官网' },
    ],

    // ========== 开源项目是否默认折叠 ==========
    projectsCollapsed: true
};
