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
    mounted() {
        this.list = this.list.reverse();
        this.getProjectKeys();
    },
    data() {
        return {
            projects: [],
            payDialog: false,
            list: [
                {
                    name: "小明",
                    money: 123
                },
                {
                    name: "小黄",
                    money: 200
                },
                {
                    name: "小黑",
                    money: 50
                }
            ]
        };
    },
    methods: {
        async getProjectKeys() {
            const projectKeys = await axios.get("/data/projectKeys.json");
            // console.log("🚀 显示项目 keys | projectKeys:", projectKeys);
            const giteeProjects = await axios.get(
                "https://gitee.com/api/v5/users/N0ts/repos?type=personal&sort=updated&page=1&per_page=100"
            );
            // console.log("🚀 Gitee 公开项目 | giteeProjects:", giteeProjects);

            giteeProjects.forEach((p) => {
                if (projectKeys.includes(p.name)) {
                    this.projects.push(p);
                }
            });

            console.log("🚀 展示项目列表 | projects:", this.projects);
        }
    }
}).mount("#main");
