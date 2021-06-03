export default {
    index: {
        title: "你好，我是",
        me: [
            "田琪扬",
            "Web前端开发实习生",
            "前端狂热粉"
        ],
        bg: "./images/bg.jpg",
        subTitle: "即使前方的路看似绝境，也要有硬生生给自己开出一条路的勇气",
        contact: [{
                name: "Blog",
                icon: "fa-wordpress",
                link: "https://blog.n0ts.cn/"
            },
            {
                name: "Email",
                icon: "fa-envelope",
                link: "mailto:mail@n0ts.cn"
            },
            {
                name: "Gitee",
                icon: "fa-github",
                link: "https://gitee.com/n0ts"
            },
            {
                name: "QQ",
                icon: "fa-qq",
                link: "https://wpa.qq.com/msgrd?v=3&uin=1656071287&site=qq&menu=yes"
            }
        ],
        loadMore: {
            text: "了解更多",
            class: "lovexhj2"
        }
    },
    about: {
        title: "关于我",
        laozi: {
            img: "./images/laozi.jpg",
            content: "<span></span>我叫<b>田琪扬</b>，今年19岁，是岳阳职业技术学院的一名大二在读生，所学专业是<b>软件技术</b>；<br /><span></span>我个人对于网站开发我有着<b>浓厚的兴趣</b>，喜欢用学习到的知识去设计与编写一些独特的网站，毕竟兴趣才是我最好的老师。<br /><span></span>曾在<b>WEB省赛荣获三等奖</b>，获得过<b>国家励志奖学金</b>，在学校中也获得过<b>优秀青年志愿者</b>，<b>学习之星称号</b>，<b>优秀班委</b>等荣誉。"
        },
        ability: [{
                icon: "fa-html5",
                title: "前端",
                subTitle: "HTML，CSS，Js，Vue...",
                color: "#ff4757",
                bfb: "80%"
            },
            {
                icon: "fa-code",
                title: "后端",
                subTitle: "ASP.NET，.NET Core，Node.js...",
                color: "#ffa502",
                bfb: "80%"
            },
            {
                icon: "fa-linux",
                title: "Linux",
                subTitle: "Nginx，Apache，基础操作...",
                color: "#1e90ff",
                bfb: "50%"
            },
            {
                icon: "fa-photo",
                title: "设计",
                subTitle: "Photoshop，CorelDRAW...",
                color: "#2ed573",
                bfb: "80%"
            }
        ],
        loadMore: {
            text: "继续浏览",
            class: "lovexhj3"
        }
    },
    project: {
        title: "我的项目",
        list: [{
                name: "吐槽网",
                text: "类似于论坛，面向青年群众的吐槽网站！",
                nb: [
                    "Vue", "ElementUI", ".NET Core", "Redis", "SQLServer"
                ],
                url: "https://gitee.com/n0ts/tucao",
                img: [
                    "./images/tucao1.png",
                    "./images/tucao2.png",
                    "./images/tucao3.png",
                    "./images/tucao4.png"
                ],
                content: `<h2>项目背景</h2>
                <p>快乐减压，健康生活，是本网站的主旨。吐槽网是以人们真实趣味事为主题的笑话网站，话题轻松休闲。在吐槽网中可以查看他人发布的趣事，也可以与其他的人分享自己亲身经历或听说到的悲剧、搞笑、有意思的、不顺心的等各类情形的生活中的事。</p>
                <h2>模块介绍</h2>
                <p>1、基本：登录注册，找回密码，密保，短信与图片验证码；</p>
                <p>2、首页：精华、热门、关注、分类的吐槽文章跳转展示，瀑布流展示最新吐槽文章，侧栏展示热门文章与近期评论，并且可以加载更多文章（一次性加载十个，可控）；</p>
                <p>3、文章页：文章标题、作者、浏览、点赞、收藏信息展示，文章内容展示，点赞收藏功能，评论与回复评论功能，评论邮件通知功能；</p>
                <p>4、发布文章页：支持富文本编辑框，图片视频上传，心情选择，存为草稿或者发布，文章信息显示；</p>
                <p>5、搜索页：支持全站模糊搜索吐槽文章，并分页展示；</p>
                <p>6、后台管理：公告查看，吐槽文章类型数据可视化展示，文章编辑、存为草稿、删除，评论管理，关注管理；</p>
                <p>7、管理员：全站文章管理、用户管理、评论管理，关注管理，公告发布等；</p>
                <h2>项目技术</h2>
                <p>1、前端采用 Vue + ElementUI 编写，拟态化简约风格设计；</p>
                <p>2、后端采用 .NET Core 编写 RESTFul API 接口，与前端进行数据交互；</p>
                <p>3、验证信息等数据在Redis进行缓存，分担了服务器的压力；</p>
                <p>4、前端资源全部采用 lazy-load 懒加载，并且存储在阿里云OOS进行调用；</p>
                <p>5、吐槽文章采用瀑布流布局分页展示，可通过加载更多每次加载更多吐槽；</p>
                <p>6、文章发布采用富文本编辑框实现，支持上传图片视频，emoji 表情等常用功能；</p>
                <p>7、前端请求统一采用自己封装的Axios与后端交互；</p>
                <p>8、使用 Echarts 完成后台数据可视化展示以及管理员的全站信息可视化展示；</p>
                <p>9、后端采用 JWT 验证用户登录状态，Token等信息存储在Redis进行管理；</p>
                <p>10、后端有专门的过滤器来防止XSS，SQL注入等攻击；</p>
                <p>11、后端配置了允许任何 Origin 解决了 CROS 跨域问题；</p>
                <p>12、短信验证码采用阿里云短信服务，配置对应的SDK来实现发送操作；验证码的临时数据则是存储在Redis中暂存，当验证码被使用或者超过三分钟则自动销毁；</p>
                <p>13、图片验证码由后端随机生成字符串并且绘制图案，然后以Base64格式返回图片到前端进行显示，验证码缓存数据由Redis进行存储，验证成功或超时三分钟则自动销毁；</p>
                <p>14、使用 .NET Core MailMessage 实现了邮件通知功能；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/tucao1.png"></li>
                    <li><img src="./images/tucao2.png"></li>
                    <li><img src="./images/tucao3.png"></li>
                    <li><img src="./images/tucao4.png"></li>
                </ul>
                <h2>项目职责</h2>
                <p>1、数据库设计，模块设计；</p>
                <p>2、全栈开发；</p>
                <p>3、修复测试人员发现的BUG；</p>`
            },
            {
                name: "小黑屋商城",
                text: "类似于淘宝，实现了电商该有的功能",
                nb: [
                    "Vue", "ElementUI", "MinitUI", "Redis", "SSM", "JAVA", "Mysql"
                ],
                url: "https://gitee.com/lu_chengwei/pc/",
                img: [
                    "./images/bg.jpg"
                ],
                content: "",
            },
            {
                name: "小次郎点餐",
                text: "点餐软件，拥有管理后台与客户界面",
                nb: [
                    "Winform", "SQLServer", "C#"
                ],
                url: "https://gitee.com/n0ts/CSharpOrderFood",
                img: [
                    "./images/xcl1.png",
                    "./images/xcl2.png",
                    "./images/xcl3.png",
                ],
                content: "",
            },
            {
                name: "极客之眼官网",
                text: "GeekEyes极客之眼官方网站",
                nb: [
                    "Vue", "Linux", "SEO", "CDN"
                ],
                url: "https://www.geekeyes.cn/",
                img: [
                    "./images/geek1.png",
                    "./images/geek2.png",
                    "./images/geek3.png",
                    "./images/geek4.png",
                ],
                content: "",
            },
            {
                name: "计算机协会官网",
                text: "给岳阳职院计算机协会写的官网",
                nb: [
                    "Vue", "Linux", "SEO", "CDN"
                ],
                url: "https://xxgcteam.com/",
                img: [
                    "./images/xxgc.png"
                ],
                content: "",
            },
            {
                name: "NutssssIndex",
                text: "自己的个人主页的系列",
                nb: [
                    "HTML", "CSS", "JS", "Vue", "Vue", "Linux", "SEO", "CDN"
                ],
                url: "https://gitee.com/n0ts/NutssssIndex",
                img: [
                    "./images/nuts.png"
                ],
                content: "",
            },
            {
                name: "记仇小本本",
                text: "简约到极致的日记记录",
                nb: [
                    "Gitee Issues", "Vue", "Vue", "Linux", "SEO", "CDN"
                ],
                url: "https://heng.n0ts.cn/",
                img: [
                    "./images/heng.png"
                ],
                content: "",
            },
            {
                name: "IceCreem搜索导航",
                text: "好看的导航搜索页",
                nb: [
                    "Vue", "Vue", "Linux", "SEO", "CDN"
                ],
                url: "https://n0ts.gitee.io/icecreamsearch/",
                img: [
                    "./images/so.png"
                ],
                content: "",
            },
            {
                name: "lovexhj",
                text: "送给另一半的",
                nb: [
                    "HTML", "CSS", "Js"
                ],
                url: "https://lovexhj.cn/",
                img: [
                    "./images/xhj.png"
                ],
                content: "",
            }
        ],
        listLoadMore: "查看",
        loadMore: {
            text: "继续浏览",
            class: "lovexhj4"
        }
    },
    contact: {
        title: "联系我",
        list: [{
                name: "博客",
                context: "blog.n0ts.cn"
            },
            {
                name: "邮箱",
                context: "mail@n0ts.cn"
            },
            {
                name: "QQ",
                context: "1656071287"
            },
            {
                name: "微信",
                context: "N0ts"
            }
        ]
    }
}