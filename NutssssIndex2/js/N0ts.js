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

let seconds = 1000;
let minutes = seconds * 60;
let hours = minutes * 60;
let days = hours * 24;
let years = days * 365;
let today = new Date();
let todayYear = today.getFullYear();
let todayMonth = today.getMonth() + 1;
let todayDate = today.getDate();
let todayHour = today.getHours();
let todayMinute = today.getMinutes();
let todaySecond = today.getSeconds();
let t1 = c.loveTime;
let t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond);
let diff = t2 - t1;
let diffYears = Math.floor(diff / years);
let diffDays = Math.floor(diff / days - diffYears * 365);
let diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours);
let diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes);
let diffSeconds = Math.floor(
    (diff - (diffYears * 365 + diffDays) * days - diffHours * hours - diffMinutes * minutes) / seconds
);

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
            today = new Date();
            todayYear = today.getFullYear();
            todayMonth = today.getMonth() + 1;
            todayDate = today.getDate();
            todayHour = today.getHours();
            todayMinute = today.getMinutes();
            todaySecond = today.getSeconds();
            t1 = c.loveTime;
            t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond);
            diff = t2 - t1;
            diffYears = Math.floor(diff / years);
            diffDays = Math.floor(diff / days - diffYears * 365);
            diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours);
            diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes);
            diffSeconds = Math.floor(
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
