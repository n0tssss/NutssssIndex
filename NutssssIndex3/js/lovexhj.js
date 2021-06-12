// 引用 api
import $api from './api.js'
import lovexhjData from './data.js'

new Vue({
    el: "#lovexhj",
    // 组件创建时
    created() {},
    // 当模板被挂载
    mounted() {
        // 太阳&&月亮&&山峰&&云&&房子生成
        this.lovexhj1DomCreate();
        // 注册滚动事件
        setTimeout(() => {
            document.addEventListener('scroll', this.lovexhj1Animation, true);
        }, 0);
    },
    // 实例销毁前
    beforeDestroy() {
        // 销毁滚动事件
        document.removeEventListener('scroll', this.lovexhj1Animation);
    },
    // 数据
    data: {
        lovexhjData, // 网站数据
    },
    // 方法
    methods: {
        // 太阳&&月亮&&山峰&&云&&房子生成
        lovexhj1DomCreate() {
            // 获取元素
            let lovexhj1 = this.$refs.lovexhj1;
            let sunlightOrMoon = this.$refs.sunlightOrMoon;
            let hill1 = this.$refs.hill1;
            let hill2 = this.$refs.hill2;
            let earth = this.$refs.earth;
            let house = this.$refs.house;

            // 生成 4 个 div
            for (let i = 0; i < 4; i++) {
                sunlightOrMoon.appendChild(document.createElement('div'));
                hill1.appendChild(document.createElement('div'));
                hill2.appendChild(document.createElement('div'));
                earth.appendChild(document.createElement('div'));
                lovexhj1.appendChild(document.createElement('div'));
            }

            // 生成 10 个 div
            for (let i = 0; i < 10; i++) {
                house.appendChild(document.createElement('div'));
            }
        },
        // 首页动画
        lovexhj1Animation() {
            let sunlightOrMoon = this.$refs.sunlightOrMoon;
            let hill1 = this.$refs.hill1;
            let hill2 = this.$refs.hill2;
            let earth = this.$refs.earth;
            // 当前滚动高度
            let Y = window.scrollY;
            sunlightOrMoon.style.top = 25 - Y * 0.05 + '%';
            sunlightOrMoon.style.right = 30 + Y * 0.08 + '%';
            hill1.style.bottom = -500 + Y * 0.6 + 'px';
            hill2.style.bottom = -450 + Y * 0.6 + 'px';
            earth.style.height = 20 + Y * 0.05 + '%';
        },
    },
})