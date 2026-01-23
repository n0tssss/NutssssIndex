/*
 * @Author: N0ts
 * @Date: 2023-06-28 15:20:09
 * @Description: main - 纯本地数据版本，无远程请求
 * @FilePath: /SupportMe/js/main.js
 * @Mail：mail@n0ts.cn
 */
const { createApp } = Vue;

createApp({
    created() {
        this.init();
    },
    mounted() {
        this.QButtonInit();
    },
    data() {
        // 从 config.js 读取静态配置
        const cfg = typeof siteConfig !== 'undefined' ? siteConfig : {};
        // 从 data.js 读取动态数据（兼容新旧两种变量名）
        const data = typeof dynamicData !== 'undefined' ? dynamicData : 
                     (typeof projectData !== 'undefined' ? projectData : {});
        
        return {
            // 网站配置（静态）
            site: cfg.site || {},
            // 作品列表（静态）
            works: cfg.works || [],
            // 开源项目（动态）
            projects: data.projects || [],
            projectsExpanded: false,
            showProjects: !(cfg.projectsCollapsed || false),
            // 支持者（动态）
            supportList: [],
            _rawSupport: data.support || [],
            coffeeShow: false,
            friendShow: null,
            loading: true,
            viewingImage: null,
            // 爱发电链接（静态配置）
            afdianUrl: cfg.afdianUsername ? `https://afdian.com/a/${cfg.afdianUsername}` : ''
        };
    },
    methods: {
        init() {
            // 设置页面标题
            if (this.site.title) {
                document.title = this.site.title;
            }
            // 处理支持者数据
            this.loadSupport();
            // 短暂延迟后关闭加载动画，让入场动画更流畅
            setTimeout(() => {
                this.loading = false;
                document.body.style.overflow = "auto";
            }, 300);
        },
        loadSupport() {
            // 处理支持者数据（添加头像等）
            this.supportList = [...this._rawSupport].reverse().map((r) => {
                r.coffeeNum = parseInt(r.money / 10) || 0;
                // 优先使用爱发电头像，其次QQ头像，最后生成随机头像
                if (r.avatar) {
                    r.img = r.avatar;
                } else if (r.qq) {
                    r.img = `https://q1.qlogo.cn/g?b=qq&nk=${r.qq}&s=100`;
                } else {
                    r.img = `https://sdn.geekzu.org/avatar/${md5(r.name)}?d=robohash`;
                }
                return r;
            });
        },
        selectFriend(friend) {
            this.friendShow = friend;
        },
        viewImage(src) {
            this.viewingImage = src;
        },
        QButtonInit() {
            let move = true;
            let clickNum = 0;
            let delayTime = 1000;
            let delayTime2 = 1500;

            const QButton = document.querySelector("#QButton");
            const QButtonBody = document.querySelector("#QButton .QButtonBody");
            const WhiteBall = document.querySelector("#QButton .QButtonBody .WhiteBall");
            const QPig = document.querySelector("#QButton .QPig");
            const QPigeyebrow = document.querySelector("#QButton .QPigeyebrow");
            const wdnmd = document.querySelector("#QButton .wdnmd");
            const hand = document.querySelector("#QButton .QButtonBody .hand");
            if (QButton) {
                QButton.addEventListener("click", () => {
                    if (move) {
                        // 防止动画过程中再次运行
                        move = false;
                        // 按钮次数+1
                        clickNum++;

                        // 鼠标禁止显示
                        QButtonBody.style.cursor = "no-drop";

                        // 按钮开启
                        QButtonBody.classList.add("ButtonBgColor");
                        WhiteBall.classList.add("WhiteBallOn");
                        this.coffeeShow = true;

                        // 第三次露头
                        if (clickNum >= 3 && clickNum <= 5) {
                            delayTime2 = 2000;
                            QPig.classList.add("QPigAni1");
                        }
                        // 第五次漏全身
                        if (clickNum >= 5) {
                            QPig.classList.add("QPigAni2");
                        }
                        // 第七次生气
                        if (clickNum >= 7) {
                            QPigeyebrow.style.display = "block";
                            setTimeout(() => {
                                wdnmd.style.display = "block";
                            }, 200);
                        }

                        setTimeout(() => {
                            // 手手点击
                            hand.classList.add("handAni");

                            setTimeout(() => {
                                // 按钮变化
                                QButtonBody.classList.remove("ButtonBgColor");
                                WhiteBall.classList.remove("WhiteBallOn");
                                wdnmd.style.display = "none";
                                this.coffeeShow = false;

                                setTimeout(() => {
                                    // 熊熊回家
                                    hand.classList.remove("handAni");
                                    QPig.classList.remove("QPigAni1");
                                    QPig.classList.remove("QPigAni2");

                                    // 延迟解锁
                                    setTimeout(() => {
                                        move = true;
                                        QButtonBody.style.cursor = "pointer";
                                    }, 300);
                                }, 500);
                            }, delayTime);
                        }, delayTime2);
                    }
                });

                // 第八次鼠标悬浮
                QButtonBody.addEventListener("mouseover", () => {
                    // 动画过程不运行
                    if (clickNum >= 8 && move) {
                        QPig.classList.add("QPigHeadOpen");
                    }
                });
                QButtonBody.addEventListener("mouseout", () => {
                    QPig.classList.remove("QPigHeadOpen");
                });
            }
        }
    }
}).mount("#main");
