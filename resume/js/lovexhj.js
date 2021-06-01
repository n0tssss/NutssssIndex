import data from './data.js'

new Vue({
    el: "#lovexhj",
    data: {
        lovexhj: data, // 网站文案数据
    },
    mounted() {
        console.log(this.lovexhj);
        // 打字开启
        this.startTyping();
        // 动画加载
        this.animationLoad();
    },
    methods: {
        // 打字开启
        startTyping() {
            new Typed(".lovexhj1Typet", {
                strings: this.lovexhj.index.me,
                typeSpeed: 30,
                backDelay: 2000,
                backSpeed: 50,
                loop: true
            })
        },
        // 平滑跳转
        scrollGoTo(text) {
            window.scrollTo({
                top: document.querySelector(`.${text}`).offsetTop,
                behavior: "smooth"
            });
        },
        // 动画加载
        animationLoad() {
            let animationDom = [
                [".ContentTitle", 0],
                [".ContentSubTitle", 500],
                [".ContentContact", 1000],
                [".lovexhj1LoadMore", 1500],
                [".lovexhj2ContentTitle", 0],
                [".lovexhj2ContentMe", 500],
                [".lovexhj2LoadMore", 1000],
            ];
            let a = ScrollReveal();
            animationDom.forEach(item => {
                a.reveal(item[0], {
                    duration: 1500,
                    delay: item[1],
                    origin: "bottom",
                    mobile: true,
                    distance: "2rem",
                    opacity: 0.001,
                    easing: "cubic-bezier(.98,0,.04,1)"
                });
            });
        }
    },
})