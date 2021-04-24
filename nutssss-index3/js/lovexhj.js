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
        // emoji1
        emoji(e) {
            // 鼠标位置
            let rect = e.currentTarget.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            // 眼睛与眼球
            let eyes = document.querySelector(".emoji");
            let eye = document.querySelectorAll(".emoji .eye div");
            // 人物位置
            let top = eyes.offsetTop + eyes.clientHeight / 2;
            let left = eyes.offsetLeft + eyes.clientWidth / 2;
            // 眼球运动
            let resultX = (x - left) * .1;
            let resultY = (y - top) * .1;
            if (resultX >= 20) {
                resultX = 20;
            } else if (resultX <= -20) {
                resultX = -20;
            }
            if (resultY >= 20) {
                resultY = 20;
            } else if (resultY <= -20) {
                resultY = -20;
            }
            // 调试
            // console.log(`鼠标位置：x：${x}，y：${y}`);
            // console.log(`人物位置：left：${left}，top：${top}`);
            // console.log(`眼球结果：resultX：${resultX}，resultY：${resultY}`);
            // 赋值
            eye[0].style.left = 50 + resultX + "%";
            eye[1].style.left = 50 + resultX + "%";
            eye[0].style.top = 50 + resultY + "%";
            eye[1].style.top = 50 + resultY + "%";
        }
    },
})