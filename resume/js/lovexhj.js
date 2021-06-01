new Vue({
    el: "#lovexhj",
    data() {
        return {
            lovexhj: null, // 网站文案数据
        }
    },
    mounted() {
        // Json 配置获取
        this.getJsonConfig();
    },
    methods: {
        // Json 配置获取
        getJsonConfig() {
            let json = "../data/lovexhj.json";
            let request = new XMLHttpRequest();
            request.open("get", json);
            request.send(null);
            request.onload = () => {
                if (request.status == 200) {
                    this.lovexhj = JSON.parse(request.responseText);
                    // 调试
                    console.log(this.lovexhj);
                    // 同步处理
                    setTimeout(() => {
                        lock3 = true;
                        // 打字开启
                        this.startTyping();
                    }, 0);
                }
            }
        },
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
        }
    },
})