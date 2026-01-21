/*
 * @Author: N0ts
 * @Date: 2021-06-12 20:02:41
 * @LastEditTime: 2023-04-20 13:51:22
 * @Description: 我的第三个个人主页
 * @FilePath: /NutssssIndex3/js/data.js
 * @Mail：mail@n0ts.top
 */

export default {
    // 当前主题
    themeSelect: "white",

    // Gitee 用户名（用于获取项目列表）
    giteeName: "N0ts",

    // 首页配置
    home: {
        title: "我是 N0ts",
        subTitle: "爱好编程，运动，旅行，摄影",
        menu: [
            {
                name: "Blog",
                icon: "fa-wordpress",
                link: "https://blog.n0ts.top/"
            },
            {
                name: "Email",
                icon: "fa-envelope",
                link: "mailto:mail@n0ts.top"
            },
            {
                name: "Github",
                icon: "fa-github",
                link: "https://github.com/n0tssss"
            },
            {
                name: "QQ",
                icon: "fa-qq",
                link: "https://wpa.qq.com/msgrd?v=3&uin=1656071287&site=qq&menu=yes"
            },
            {
                name: "坚果小栈 - 技术交流",
                icon: "fa-code",
                link: "https://jq.qq.com/?_wv=1027&k=qMNJqj3F"
            }
        ]
    },

    // 关于我配置
    about: {
        content: `<h1>你好!</h1>
        <h2>我是 N0ts，</h2>
        <p>一名<b>💻全栈开发者</b>，现就职于🌏上海</p>
        <p>用#️⃣代码去与计算机进行沟通，是我最喜欢做的事🔋</p>
        <p>我也开源的一些小作品，去提升自己的开发能力⭐</p>
        <p>当然，我也很乐意与志同道合的朋友🤙一起学习，可在上方来找我哦</p>
        <p>即使前方的路看似绝境🌋，也要有硬生生为自己开辟出一条道路的勇气！💪</p>
        <p>
            我的开源：<a href="https://github.com/n0tssss" target="_blank">📁Github</a>；我的博客：<a
                href="https://blog.n0ts.top/"
                target="_blank"
                >📚Blog</a
            >。
        </p>`,
        img: "./images/me.jpg"
    },

    // 我的项目配置
    projects: {
        title: "我的项目",
        subTitle: "一些开源的小作品，欢迎 Star ⭐"
    },

    // 我的网站配置
    links: {
        title: "我的网站",
        subTitle: "这些是我的相关站点，欢迎访问",
        list: [
            {
                name: "个人博客",
                desc: "记录生活与技术的点点滴滴",
                icon: "fa-wordpress",
                url: "https://blog.n0ts.top/"
            },
            {
                name: "笔记站点",
                desc: "学习笔记与知识整理",
                icon: "fa-book",
                url: "https://note.n0ts.top/"
            },
            {
                name: "个人主页",
                desc: "N0ts 的个人导航页",
                icon: "fa-home",
                url: "https://n0ts.top/"
            },
            {
                name: "坚果小栈",
                desc: "技术交流 QQ 群",
                icon: "fa-comments",
                url: "https://jq.qq.com/?_wv=1027&k=qMNJqj3F"
            }
        ]
    },

    // 底部版权配置
    footer: {
        author: "N0ts",
        themeName: "N0ts",
        themeLink: "https://n0ts.top/"
    }
};
