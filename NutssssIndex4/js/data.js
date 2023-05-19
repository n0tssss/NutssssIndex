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
                link: "https://blog.n0ts.top/"
            },
            {
                name: "Email",
                icon: "fa-envelope",
                link: "mailto:mail@n0ts.top"
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
            img: "./images/me.jpg",
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
                img: "./images/tucao1.png",
                content: `<h2>项目类型</h2>
                <p>练手项目</p>
                <h2>开发周期</h2>
                <p>2021年2月2日 – 2021年3月12日，5人/38天</p>
                <h2>开发工具</h2>
                <p>Visual Studio，Visual Code，SQLServer、Redis、Git、Postman</p>
                <h2>项目背景</h2>
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
                img: "./images/bg.jpg",
                content: `<h2>项目类型</h2>
                <p>练手项目</p>
                <h2>开发周期</h2>
                <p>2020年11月2日 – 2020年12月1日，3人/29天</p>
                <h2>开发工具</h2>
                <p>IDEA、Visual Code、MySQL、Redis、Git、Postman</p>
                <h2>项目背景</h2>
                <p>小黑屋商城是一个综合性的B2C平台，类似京东商城、天猫商城。会员可以在商城浏览商品、下订单，以及参加各种活动。管理员、运营可以在平台后台管理系统中管理商品、订单、会员等。</p>
                <h2>模块介绍</h2>
                <p>1、	基本：登陆注册、找回密码、验证码；</p>
                <p>2、	首页：轮播图热点展示、商品分类展示、商品展示；</p>
                <p>3、	商品详情：图片轮流展示、图片放大镜、商品信息展示、打折与原价展示、添加购物车与购买、评论分类展示、二维码分享、热销展示；</p>
                <p>4、	购物车：购物车商品展示、数量修改、商品类型修改、批量管理与购买、删除购物车；</p>
                <p>5、	支付：充值余额、支付宝支付、支付成功/失败展示；</p>
                <p>6、	用户：个人信息管理、地址选择、订单管理、购物车管理、余额管理；</p>
                <h2>项目技术</h2>
                <p>1.	前端分为 PC 与 Mobile 两个客户端，基于 Vue、ElementUI、Mint UI 编写；</p>
                <p>2.	后端采用 Java、SSM 编写 RESTFul API 风格接口；</p>
                <p>3.	前端资源全部采用 lazy-load 懒加载，并且存储在阿里云OOS进行调用；</p>
                <p>4.	图片验证码由后端生成返回Base64并在前端展示，手机验证码则为阿里云短信服务，验证缓存统一放在Redis进行暂存；</p>
                <p>5.	二维码生成采用 QRCode 根据链接进行生成并压缩；</p>
                <p>6.	充值系统基于支付宝沙箱程序模拟真实的支付宝支付验证付款等；</p>
                <p>7.	登录验证采用 JWT 授权，请求需要登录的接口需要提交 Token 才能通过，否则登陆过期；</p>
                <p>8.	Mobile 端采用瀑布流布局来展示商品；</p>
                <h2>项目预览</h2>
                <p>暂无</p>
                <h2>项目职责</h2>
                <p>1、前端功能开发、页面设计；</p>
                <p>2、支付宝支付对接；</p>
                <p>3、Debug测试并修复；</p>`,
            },
            {
                name: "小次郎点餐",
                text: "点餐软件，拥有管理后台与客户界面",
                nb: [
                    "Winform", "SQLServer", "C#"
                ],
                url: "https://gitee.com/n0ts/CSharpOrderFood",
                img: "./images/xcl1.png",
                content: `<h2>项目类型</h2>
                <p>练手项目</p>
                <h2>开发周期</h2>
                <p>2021年4月2日 – 2021年5月5日，2人/33天</p>
                <h2>开发工具</h2>
                <p>Visual Studio、SQLServer、Git</p>
                <h2>项目背景</h2>
                <p>本项目是为了满足巨大的餐饮市场中人们对快捷点餐的需求。我们的产品具有的高效、快捷、便利的特点将会为我们带来巨大的市场，我们的产品开发初期主要服务于餐饮行业，后续开发可涉及更广泛的娱乐、生活领域，是一款具备广阔市场前景的应用！</p>
                <h2>模块介绍</h2>
                <p>1、	基本：登录注册、找回密码、密保、验证码；</p>
                <p>2、	客户端：美食分类、购物车、支付充值、订单操作、地址管理、个人信息修改、密码修改、数据可视化；</p>
                <p>3、	服务端：订单管理、美食与分类管理、上下架操作、美食图片上传、用户管理、数据可视化；</p>
                <h2>项目技术</h2>
                <p>1、	使用 Winform 绘制软件界面，C# 便携后台代码；</p>
                <p>2、	使用 SQLServer 作为数据存储，便携 DBHelper 类与数据库进行交互；</p>
                <p>3、	图片验证码使用 Winform GDI+ 绘图生成随机验证码并显示；</p>
                <p>4、	所有密码采用 MD5 加密方式进行存储；</p>
                <p>5、	对所有的前台数据进行XSS注入或为空验证，防止恶意代码或空值造成程序报错；</p>
                <p>6、	许多位置进行了 Try Catch 异常捕获，如发生断网等情况软件会提醒客户而不是报错；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/xcl1.png"></li>
                    <li><img src="./images/xcl2.png"></li>
                    <li><img src="./images/xcl3.png"></li>
                </ul>
                <h2>项目职责</h2>
                <p>1、参与原型图设计与 UI 设计，辅助市场调研；</p>
                <p>2、负责数据库设计，模块设计；</p>
                <p>3、客户端与服务端的编程开发；</p>
                <p>4、修复测试人员发现的BUG；</p>`,
            },
            {
                name: "记仇小本本",
                text: "简约到极致的日记记录",
                nb: [
                    "Gitee Issues", "Vue", "Vue", "Linux", "SEO", "CDN"
                ],
                url: "https://heng.n0ts.top/",
                img: "./images/heng1.png",
                content: `<h2>项目类型</h2>
                <p>练手项目</p>
                <h2>开发周期</h2>
                <p>1人/2天</p>
                <h2>开发工具</h2>
                <p>Visual Code、Git、Postman、Gitee API</p>
                <h2>项目背景</h2>
                <p>单纯的记仇小本本，可用于记录日常生活</p>
                <h2>模块介绍</h2>
                <p>1、	查看记仇；</p>
                <p>2、	发布记仇；</p>
                <h2>项目技术</h2>
                <p>1、	前端采用Vue + ElementUI制作；</p>
                <p>2、	数据存储利用了Gitee Issues进行存储；</p>
                <p>3、	CSS 3D样式模拟书本翻页；</p>
                <p>4、	CSS 绘制书本样式；</p>
                <p>5、	懒加载记仇数据，类似于翻页；</p>
                <p>6、	富文本支持，表情照片视频支持；</p>
                <p>7、	全端响应式自适应；</p>
                <p>8、	采用CDN加速网站；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/heng1.png"></li>
                    <li><img src="./images/heng2.png"></li>
                    <li><img src="./images/heng3.png"></li>
                </ul>`,
            },
            {
                name: "IceCreem搜索导航",
                text: "好看的导航搜索页",
                nb: [
                    "Vue", "Vue", "Linux", "SEO", "CDN"
                ],
                url: "https://n0ts.gitee.io/icecreamsearch/",
                img: "./images/so.png",
                content: `<h2>项目类型</h2>
                <p>练手项目</p>
                <h2>开发周期</h2>
                <p>1人/2天</p>
                <h2>开发工具</h2>
                <p>Visual Code、Git、Postman、Gitee API</p>
                <h2>项目背景</h2>
                <p>团队需要，新年新官网</p>
                <h2>模块介绍</h2>
                <p>1、	搜索功能；</p>
                <p>2、	搜索引擎切换与添加；</p>
                <p>3、	各类实用网站导航与分类；</p>
                <p>4、	配置本地存储；</p>
                <p>5、	背景图获取 bing 每日壁纸或自定义壁纸；</p>
                <p>6、	搜索结果数量自定义；</p>
                <h2>项目技术</h2>
                <p>1、	前端采用 Vue + ElementUI 制作，后端采用 Node + Mysql 制作；</p>
                <p>2、	百度搜索结果实时回调；</p>
                <p>3、	bing 每日壁纸回调；</p>
                <p>4、	本地配置存储；</p>
                <p>5、	实用网站分类预览；</p>
                <p>6、	全端响应式自适应；</p>
                <p>7、	采用CDN加速网站；</p>
                <h2>项目预览</h2>
                <p>暂无</p>`,
            },
            {
                name: "极客之眼官网",
                text: "GeekEyes极客之眼官方网站",
                nb: [
                    "Vue", "Linux", "SEO", "CDN"
                ],
                url: "https://www.geekeyes.cn/",
                img: "./images/geek1.png",
                content: `<h2>项目类型</h2>
                <p>官网</p>
                <h2>开发周期</h2>
                <p>1人/8天</p>
                <h2>开发工具</h2>
                <p>Visual Code、Git、Postman、Gitee API</p>
                <h2>项目背景</h2>
                <p>团队需要，新年新官网</p>
                <h2>模块介绍</h2>
                <p>1、	首页轮播图，介绍；</p>
                <p>2、	关于我们；</p>
                <p>3、	公益活动；</p>
                <p>4、	捐赠人员；</p>
                <p>5、	团队成员；</p>
                <p>6、	加入我们；</p>
                <h2>项目技术</h2>
                <p>1、	前端采用Vue制作；</p>
                <p>2、	CSS 中国风科技感设计；</p>
                <p>3、	CSS 按钮赛博朋克电磁风格；</p>
                <p>4、	CSS 推拉门图片风格；</p>
                <p>5、	全端响应式自适应；</p>
                <p>6、	采用CDN加速网站；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/geek1.png"></li>
                    <li><img src="./images/geek2.png"></li>
                    <li><img src="./images/geek3.png"></li>
                    <li><img src="./images/geek4.png"></li>
                </ul>`,
            },
            {
                name: "计算机协会官网",
                text: "给岳阳职院计算机协会写的官网",
                nb: [
                    "Vue", "Linux", "SEO", "CDN"
                ],
                url: "https://xxgcteam.com/",
                img: "./images/xxgc1.png",
                content: `<h2>项目类型</h2>
                <p>官网</p>
                <h2>开发周期</h2>
                <p>1人/4天</p>
                <h2>开发工具</h2>
                <p>Visual Code、Git、Postman</p>
                <h2>项目背景</h2>
                <p>给好朋友会长做一个计协官网</p>
                <h2>模块介绍</h2>
                <p>1、	首页；</p>
                <p>2、	关于我们；</p>
                <p>3、	历程发展；</p>
                <p>4、	计协干部；</p>
                <p>5、	日常一览；</p>
                <p>6、	加入我们；</p>
                <h2>项目技术</h2>
                <p>1、	前端采用 Vue + ElementUI 制作，后端采用 Node + Mysql 制作；</p>
                <p>2、	轮播图，轮播图的放大效果动效；</p>
                <p>3、	关于我们点击文章功能；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/xxgc1.png"></li>
                    <li><img src="./images/xxgc2.png"></li>
                    <li><img src="./images/xxgc3.png"></li>
                </ul>`,
            },
            {
                name: "NutssssIndex",
                text: "自己的个人主页的系列",
                nb: [
                    "HTML", "CSS", "JS", "Vue", "Vue", "Linux", "SEO", "CDN"
                ],
                url: "https://gitee.com/n0ts/NutssssIndex",
                img: "./images/nuts1.png",
                content: `<h2>项目类型</h2>
                <p>练手单页</p>
                <h2>开发周期</h2>
                <p>1人/？天</p>
                <h2>开发工具</h2>
                <p>Visual Code、Git、Postman</p>
                <h2>项目背景</h2>
                <p>个人练手设计作品</p>
                <h2>项目技术</h2>
                <p>1、	全端响应式自适应；</p>
                <p>2、	简约风格，与众不同；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/nuts1.png"></li>
                    <li><img src="./images/nuts2.png"></li>
                </ul>`,
            },
            {
                name: "lovexhj",
                text: "送给另一半的",
                nb: [
                    "HTML", "CSS", "Js"
                ],
                url: "https://love.n0ts.top/",
                img: "./images/xhj1.png",
                content: `<h2>项目类型</h2>
                <p>练手单页</p>
                <h2>开发周期</h2>
                <p>1人/10天</p>
                <h2>开发工具</h2>
                <p>Visual Code、Git</p>
                <h2>项目背景</h2>
                <p>第一个练手作品</p>
                <h2>项目技术</h2>
                <p>1、	全端响应式自适应；</p>
                <p>2、	简约风格，与众不同；</p>
                <p>3、	背景视差滚动；</p>
                <p>4、	打字机效果；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/xhj1.png"></li>
                    <li><img src="./images/xhj2.png"></li>
                    <li><img src="./images/xhj3.png"></li>
                    <li><img src="./images/xhj4.png"></li>
                </ul>`,
            },
            {
                name: "1905no1",
                text: "给大学班级做的博客网站",
                nb: [
                    "HTML", "CSS", "Js", "PHP", "Wordpress"
                ],
                url: "https://1905no1.cn/",
                img: "./images/no1.png",
                content: `<h2>项目类型</h2>
                <p>班级官网</p>
                <h2>开发周期</h2>
                <p>1人/4天</p>
                <h2>开发工具</h2>
                <p>Visual Code、Git、WordPress</p>
                <h2>项目背景</h2>
                <p>给班级做一个官网，基于WordPress实现文章发送等功能</p>
                <h2>项目技术</h2>
                <p>1、 全端响应式自适应；</p>
                <p>2、 简约风格，与众不同；</p>
                <p>3、 背景视差滚动；</p>
                <p>4、 打字机效果；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/no1.png"></li>
                    <li><img src="./images/no2.png"></li>
                    <li><img src="./images/no3.png"></li>
                </ul>`,
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
                context: "blog.n0ts.top"
            },
            {
                name: "邮箱",
                context: "mail@n0ts.top"
            },
            {
                name: "QQ",
                context: "1656071287"
            },
            {
                name: "微信",
                context: "n0tssss"
            }
        ]
    }
}