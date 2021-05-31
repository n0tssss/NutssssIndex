// 引用 api
import $api from './api.js'

new Vue({
    el: "#lovexhj",
    // 组件创建时
    created() {
        this.lovexhjGetData();
    },
    // 当模板被挂载
    mounted() {
        setTimeout(() => {
            document.addEventListener('scroll', this.lovexhj1Animation, true);
        }, 0);
    },
    // 实例销毁前
    beforeDestroy() {
        document.removeEventListener('scroll', this.lovexhj1Animation);
    },
    // 数据
    data: {
        lovexhjData: null,
    },
    // 方法
    methods: {
        // 获取网页数据
        lovexhjGetData() {
            let json = "../data/lovexhj.json";
            let request = new XMLHttpRequest();
            request.open("get", json);
            request.send(null);
            request.onload = () => {
                if (request.status == 200) {
                    this.lovexhjData = JSON.parse(request.responseText);
                    console.log(this.lovexhjData);
                    setTimeout(() => {
                        this.lovexhj1DomCreate();
                    }, 0);
                }
            }
        },
        // 太阳&&月亮&&山峰&&云&&房子生成
        lovexhj1DomCreate() {
            // 获取元素
            let lovexhj1 = document.querySelector(".lovexhj1");
            let sunlightOrMoon = document.querySelector(".sunlightOrMoon");
            let hill1 = document.querySelector(".hill1");
            let hill2 = document.querySelector(".hill2");
            let earth = document.querySelector(".earth");
            let house = document.querySelector(".house");

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
            let sunlightOrMoon = document.querySelector(".sunlightOrMoon");
            let hill1 = document.querySelector(".hill1");
            let hill2 = document.querySelector(".hill2");
            let earth = document.querySelector(".earth");
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