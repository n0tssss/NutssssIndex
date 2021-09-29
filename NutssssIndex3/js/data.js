/*
 * @Author: N0ts
 * @Date: 2021-06-12 20:02:41
 * @LastEditTime: 2021-09-30 00:13:01
 * @Description: 我的第三个个人主页
 * @FilePath: \NutssssIndex3\js\data.js
 * @Mail：mail@n0ts.cn
 */

export default {
    themeSelect: "white",
    // 主题
    themes: {
        white: [
            // 背景颜色
            ["--bgColor", "rgb(255, 165, 92)"],
            // 第一屏背景颜色
            ["--firstBgColor", "linear-gradient(to top, rgb(255, 165, 92), rgb(255, 159, 49))"],
            // 山颜色
            ["--hillColor1", "rgb(115, 49, 54)"],
            ["--hillColor2", "rgb(131, 55, 59)"],
            ["--hillColor3", "rgb(162, 72, 80)"],
            ["--hillColor4", "rgb(221, 102, 107)"],
            // 大地颜色
            ["--earth", "linear-gradient(to top right, rgb(202, 112, 117), rgb(126, 50, 53))"],
            // 小草颜色
            ["--cao", "linear-gradient(to top, rgb(202, 112, 117), rgb(126, 50, 53))"],
            // 标题文字颜色
            ["--titleColor", "rgb(255, 69, 32)"],
            // 标题文字阴影
            ["--titleShadow", "2px 2px 0px rgba(255, 255, 255, .8), 0 0 10px rgba(0, 0, 0, .5)"],
            // 图标菜单阴影
            ["--iconShadow", "0 0 5px white"],
        ],
        dark: [
            // 背景颜色
            ["--bgColor", "rgb(48, 37, 95)"],
            // 第一屏背景颜色
            ["--firstBgColor", "linear-gradient(to top, rgb(78, 36, 88), rgb(13, 18, 51))"],
            // 山颜色
            ["--hillColor1", "rgb(36, 32, 74)"],
            ["--hillColor2", "rgb(41, 35, 94)"],
            ["--hillColor3", "rgb(65, 37, 71)"],
            ["--hillColor4", "rgb(87, 50, 95)"],
            // 大地颜色
            ["--earth", "linear-gradient(to top right, rgb(43, 38, 95), rgb(61, 36, 95))"],
            // 小草颜色
            ["--cao", "linear-gradient(to top, rgb(85, 49, 96), rgb(78, 72, 128))"],
            // 标题文字颜色
            ["--titleColor", "rgb(136, 65, 167)"],
            // 标题文字阴影
            ["--titleShadow", "2px 2px 0px rgba(255, 255, 255, .8), 0 0 10px rgba(0, 0, 0, .5)"],
            // 图标菜单阴影
            ["--iconShadow", "0 0 2px white"],
        ]
    },
    lovexhj1: {
        title: "咸鱼 N0ts",
        subTitle: "爱好编程，运动，旅行，摄影与冰激凌",
        menu: [{
                name: "Blog",
                icon: "fa-wordpress",
                link: "https://blog.n0ts.cn/"
            },
            {
                name: "Email",
                icon: "fa-envelope",
                link: "mailto:nutssss@qq.com"
            },
            {
                name: "Gitee",
                icon: "fa-github",
                link: "https://gitee.com/n0ts"
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
    }
}