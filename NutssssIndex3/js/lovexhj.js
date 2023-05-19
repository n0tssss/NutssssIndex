/*
 * @Author: N0ts
 * @Date: 2020-12-25 10:39:42
 * @LastEditTime: 2023-04-23 10:54:29
 * @Description: 我的第三个个人主页
 * @FilePath: /NutssssIndex3/js/lovexhj.js
 * @Mail：mail@n0ts.top
 */

/**
 * 一些引用
 */
import lovexhjData from "./data.js";
import http from "./request.js";

/**
 * Vue 实例
 */
new Vue({
    el: "#lovexhj",
    /**
     * 组件创建时
     */
    created() {},

    /**
     * 当模板被挂载
     */
    mounted() {
        window.lovexhj = this;
        // 太阳&&月亮&&山峰&&云&&房子生成
        this.lovexhj1DomCreate();
        // 注册滚动事件
        document.addEventListener("scroll", this.lovexhj1Animation, true);
        // 主题修改
        this.changeTheme();
        this.getGiteeData();
    },

    /**
     * 实例销毁前
     */
    beforeDestroy() {
        // 销毁滚动事件
        document.removeEventListener("scroll", this.lovexhj1Animation);
    },

    /**
     * 初始化数据
     */
    data: {
        lovexhjData, // 网站数据
        meImgShow: false // 板块 2 照片是否展开
    },

    /**
     * 方法
     */
    methods: {
        /**
         * 太阳 && 月亮 && 山峰 && 云 && 房子生成
         */
        lovexhj1DomCreate() {
            // 获取元素
            let lovexhj1 = this.$refs.lovexhj1;
            let sun = this.$refs.sun;
            let Moon = this.$refs.Moon;
            let hill1 = this.$refs.hill1;
            let hill2 = this.$refs.hill2;
            let earth = this.$refs.earth;
            let house = this.$refs.house;

            // 生成 4 个 div
            for (let i = 0; i < 4; i++) {
                sun.appendChild(document.createElement("div"));
                Moon.appendChild(document.createElement("div"));
                hill1.appendChild(document.createElement("div"));
                hill2.appendChild(document.createElement("div"));
                earth.appendChild(document.createElement("div"));
                lovexhj1.appendChild(document.createElement("div"));
            }

            // 生成 10 个 div
            for (let i = 0; i < 10; i++) {
                house.appendChild(document.createElement("div"));
            }
        },

        /**
         * 首页动画
         */
        lovexhj1Animation() {
            // 获取元素
            let sun = this.$refs.sun;
            let Moon = this.$refs.Moon;
            // let hill1 = this.$refs.hill1;
            // let hill2 = this.$refs.hill2;
            // let earth = this.$refs.earth;

            // 当前滚动高度
            let Y = window.scrollY;

            // 修改位置
            sun.style.top = 25 - Y * 0.05 + "%";
            Moon.style.top = 25 - Y * 0.05 + "%";
            sun.style.right = 30 + Y * 0.08 + "%";
            Moon.style.right = 30 + Y * 0.08 + "%";
            // hill1.style.bottom = -500 + Y * 0.6 + 'px';
            // hill2.style.bottom = -450 + Y * 0.6 + 'px';
            // earth.style.height = 20 + Y * 0.05 + '%';
        },

        /**
         * 主题修改
         */
        changeTheme() {
            // 获取主题配置
            let theme = window.localStorage.getItem("theme");

            // 没有配置则初始化
            if (theme == null) {
                window.localStorage.setItem("theme", "white");
                return this.changeTheme();
            }

            // 图标修改
            this.lovexhjData.themeSelect = theme;

            document.documentElement.setAttribute("theme", theme);

            // // 循环修改配色
            // console.log(this.lovexhjData.themes[theme]);
            // this.lovexhjData.themes[theme].forEach(item => {
            //     document.documentElement.style.setProperty(item[0], item[1]);
            // });
        },

        /**
         * 点击切换主题
         */
        clickChangeTheme() {
            window.localStorage.setItem("theme", window.localStorage.getItem("theme") == "white" ? "dark" : "white");
            this.changeTheme();
        },

        /**
         * 获取码云数据
         */
        getGiteeData() {
            http({
                url: "https://gitee.com/api/v5/users/n0ts/repos?type=personal&sort=updated&page=1&per_page=100",
                method: "get"
            }).then((res) => {
                console.log(res);
            });
        }
    }
});
