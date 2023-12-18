/*
 * @Author: N0ts
 * @Date: 2023-06-28 15:20:09
 * @Description: main
 * @FilePath: /SupportMe/js/main.js
 * @Mail：mail@n0ts.cn
 */
const { createApp } = Vue;

axios.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

createApp({
    created() {
        this.init();
    },
    mounted() {
        this.QButtonInit();
    },
    data() {
        return {
            projects: [],
            payDialog: false,
            supportList: [],
            coffeeShow: false,
            friendShow: null,
            loading: true
        };
    },
    methods: {
        async init() {
            await this.getSuppot();
            await this.getProjectKeys();
            this.loading = false;
            document.body.style.overflow = "auto";
        },
        async getProjectKeys() {
            const projectKeys =
                projectData.projectKeys && projectData.projectKeys.length > 0
                    ? projectData.projectKeys
                    : await axios.get("https://api.n0ts.top/json", {
                          params: {
                              key: "giteeProjects"
                          }
                      });
            // console.log("🚀 显示项目 keys | projectKeys:", projectKeys);
            const projects = await axios.post("https://api.n0ts.top/api/gitee", {
                method: "GET",
                url: `/users/${projectData.giteeName}/repos`,
                params: {
                    type: "personal",
                    sort: "updated",
                    page: 1,
                    per_page: 100
                }
            });
            let giteeProjects = {};
            projects.data.forEach((p) => {
                giteeProjects[p.name] = p;
            });
            // console.log("🚀 Gitee 公开项目 | giteeProjects:", giteeProjects);

            projectKeys.forEach((p) => {
                if (giteeProjects[p]) {
                    this.projects.push(giteeProjects[p]);
                }
            });

            // console.log("🚀 展示项目列表 | projects:", this.projects);
        },
        async getSuppot() {
            const rs =
                projectData.support && projectData.support.length > 0
                    ? projectData.support
                    : await axios.get("https://api.n0ts.top/json", {
                          params: {
                              key: "support"
                          }
                      });
            this.supportList = rs.reverse().map((r) => {
                r.coffeeNum = parseInt(r.money / 10);
                r.img = r.qq
                    ? `https://q1.qlogo.cn/g?b=qq&nk=${r.qq}&s=100`
                    : `https://sdn.geekzu.org/avatar/${md5(r.name)}?d=robohash`;
                return r;
            });
            // console.log("🚀 请我喝咖啡的各位 | supportList:", this.supportList);
        },
        selectFriend(friend) {
            this.friendShow = friend;
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
