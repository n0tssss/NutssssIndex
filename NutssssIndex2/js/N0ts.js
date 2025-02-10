/*
 * @Author: N0ts
 * @Date: 2021-11-16 16:59:53
 * @LastEditTime: 2021-12-03 10:34:54
 * @Description: main
 * @FilePath: /NutssssIndex2/js/N0ts.js
 * @Mail：mail@n0ts.top
 */

import c from "./config.js";

window.onload = function () {
    document.querySelector(".load").style.display = "none";
    document.querySelector(".Box").classList.add("BoxLoad");
};

new Vue({
    el: "#app",
    data: {
        tabState: false, // 侧边栏菜单是否展开
        menuTabState: false, // 侧边栏顶部菜单是否展开
        pagesTabState: false, // 侧边栏页面菜单是否展开
        pageIndex: 0, // 当前页面索引
        timeText: "", // 计时文案
        giteeData: null, // 码云仓库数据
    },
    created() {
        // 获取 Gitee 仓库信息
        this.getGiteeData();
    },
    mounted() {
        // 计时器开始
        setInterval(() => {
            this.lovetime();
        }, 1000);

        // 图片查看
        const imgs = document.querySelectorAll(".pagesTextBox img");
        imgs.forEach((item) => {
            new Viewer(item);
        });
    },
    methods: {
        /**
         * 侧边菜单打开关闭
         */
        changeTab() {
            this.tabState = !this.tabState;
        },

        /**
         * 侧边栏顶部菜单打开关闭
         */
        changeMenuTab() {
            this.menuTabState = !this.menuTabState;
        },

        /**
         * 侧边栏页面菜单打开关闭
         */
        changePagesTab() {
            this.pagesTabState = !this.pagesTabState;
        },

        /**
         * 侧边菜单收起
         */
        closeBlackWindow() {
            this.tabState = this.menuTabState = this.pagesTabState = false;
        },

        /**
         * 切换页面
         * @param {*} i 索引
         */
        changePageIndex(i) {
            this.pageIndex = i;
        },

        /**
         * 时差计算
         */
        lovetime() {
            let seconds = 1000;
            let minutes = seconds * 60;
            let hours = minutes * 60;
            let days = hours * 24;
            let years = days * 365;
            const today = new Date();
            const todayYear = today.getFullYear();
            const todayMonth = today.getMonth() + 1;
            const todayDate = today.getDate();
            const todayHour = today.getHours();
            const todayMinute = today.getMinutes();
            const todaySecond = today.getSeconds();
            const t1 = c.loveTime;
            const t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond);
            const diff = t2 - t1;
            const diffYears = Math.floor(diff / years);
            const diffDays = Math.floor(diff / days - diffYears * 365);
            const diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours);
            const diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes);
            const diffSeconds = Math.floor(
                (diff - (diffYears * 365 + diffDays) * days - diffHours * hours - diffMinutes * minutes) / seconds
            );
            this.timeText = `我们已经在一起 ${diffYears} 年 ${diffDays} 天 ${diffHours} 小时 ${diffMinutes} 分钟 ${diffSeconds} 秒啦！`;
        },

        /**
         * 获取 Gitee 仓库信息
         */
        getGiteeData() {
            axios.get(`https://gitee.com/api/v5/users/${c.giteeName}/repos?type=personal&sort=updated&page=1&per_page=100`).then(res => {
                this.giteeData = res.data;
            });
        },
    }
});
