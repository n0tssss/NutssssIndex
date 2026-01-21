/*
 * @Author: N0ts
 * @Date: 2020-12-25 10:39:42
 * @LastEditTime: 2023-04-23 10:54:29
 * @Description: 我的第三个个人主页
 * @FilePath: /NutssssIndex3/js/lovexhj.js
 * @Mail：mail@n0ts.top
 */

/**
 * 引用配置数据
 */
import siteData from "./data.js";

/**
 * Vue 实例
 */
new Vue({
    el: "#app",

    /**
     * 初始化数据
     */
    data: {
        siteData, // 网站配置数据
        meImgShow: false, // 关于我照片是否展开
        giteeData: [], // Gitee 项目数据
        showBackTop: false // 是否显示回到顶部按钮
    },

    /**
     * 当模板被挂载
     */
    mounted() {
        window.app = this;
        // 太阳&&月亮&&山峰&&云&&房子生成
        this.createHomeElements();
        // 注册滚动事件
        document.addEventListener("scroll", this.handleScroll, true);
        // 主题修改
        this.changeTheme();
        // 获取 Gitee 项目数据
        this.getGiteeData();
    },

    /**
     * 实例销毁前
     */
    beforeDestroy() {
        // 销毁滚动事件
        document.removeEventListener("scroll", this.handleScroll);
    },

    /**
     * 方法
     */
    methods: {
        /**
         * 太阳 && 月亮 && 山峰 && 云 && 房子生成
         */
        createHomeElements() {
            // 获取元素
            let sectionHome = this.$refs.sectionHome;
            let sun = this.$refs.sun;
            let moon = this.$refs.moon;
            let hillBack = this.$refs.hillBack;
            let hillFront = this.$refs.hillFront;
            let ground = this.$refs.ground;
            let house = this.$refs.house;

            // 生成 4 个 div
            for (let i = 0; i < 4; i++) {
                sun.appendChild(document.createElement("div"));
                moon.appendChild(document.createElement("div"));
                hillBack.appendChild(document.createElement("div"));
                hillFront.appendChild(document.createElement("div"));
                ground.appendChild(document.createElement("div"));
                sectionHome.appendChild(document.createElement("div"));
            }

            // 生成 10 个 div（烟囱烟雾）
            for (let i = 0; i < 10; i++) {
                house.appendChild(document.createElement("div"));
            }
        },

        /**
         * 滚动事件处理
         */
        handleScroll() {
            // 获取元素
            let sun = this.$refs.sun;
            let moon = this.$refs.moon;

            // 当前滚动高度
            let scrollY = window.scrollY;

            // 修改太阳/月亮位置（视差效果）
            if (sun && moon) {
                sun.style.top = 25 - scrollY * 0.05 + "%";
                moon.style.top = 25 - scrollY * 0.05 + "%";
                sun.style.right = 30 + scrollY * 0.08 + "%";
                moon.style.right = 30 + scrollY * 0.08 + "%";
            }

            // 显示/隐藏回到顶部按钮
            this.showBackTop = scrollY > 300;
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

            // 更新数据
            this.siteData.themeSelect = theme;

            // 设置 HTML 属性
            document.documentElement.setAttribute("theme", theme);
        },

        /**
         * 点击切换主题
         */
        clickChangeTheme() {
            const currentTheme = window.localStorage.getItem("theme");
            const newTheme = currentTheme === "white" ? "dark" : "white";
            window.localStorage.setItem("theme", newTheme);
            this.changeTheme();
        },

        /**
         * 回到顶部
         */
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },

        /**
         * 获取 Gitee 项目数据
         */
        getGiteeData() {
            const giteeName = this.siteData.giteeName;
            axios
                .get(`https://gitee.com/api/v5/users/${giteeName}/repos?type=personal&sort=updated&page=1&per_page=12`)
                .then((res) => {
                    this.giteeData = res.data;
                })
                .catch((err) => {
                    console.error("获取 Gitee 数据失败:", err);
                });
        }
    }
});
