module.exports = {

    "title": "Notebook",
    "description": "Notebook Repos",
    "author": "uuensky",
    "output.name": "uuensky Notebook",
    "language": "zh-cn",
    "gitbook": "3.2.3",
    "root": "./docs",

    "links": {
        "sidebar": {
            "我的主页": "https://gitee.com/uuensky"
        }
    },

    "plugins": [
        "-lunr",
        "-search", 
        "search-pro",
        "code",
        "expandable-chapters",
        "back-to-top-button",
        "tbfed-pagefooter",
        "hide-element",
        "-sharing",
        "sitemap",
        "theme-lou"
    ],

    "pluginsConfig": {
        "code": {
            "copyButtons": true
        },

        // "expandable-chapters":{},

        "tbfed-pagefooter": {
            "copyright": "Copyright © uuensky 2022",
            "modify_label": "该文件修订时间：",
            "modify_format": "YYYY-MM-DD HH:mm:ss"
        },

        "hide-element": {
            "elements": [".gitbook-link"]
        },

        "sitemap": {
            "hostname": "https://gitee.com/uuensky"
        },

        // "github": {
        //     "url": "https://github.com/uuensky/notebook"
        // },
        // "github-buttons": {
        //     "repo": "uuensky/notebook",
        //     "types": [
        //         "star"
        //     ],
        //     "size": "small"
        // },
        "theme-lou": {
            "color": "#e69138", // 主题色
            "favicon": "static/favicon.ico", // favicon图标
            "logo": "static/logo.png", // 顶部左侧图标
            "appleTouchIconPrecomposed152": "static/apple.png", // apple图标
            "copyrightLogo": "assets/copyright.png",  // 底部水印LOGO
            "forbidCopy": true, // 页面是否禁止复制
            "search-placeholder": "Input Keywords to Search", // 搜索框默认文本
            "book-summary-title": "Article Directory", // 目录标题
            "book-anchor-title": "Search In the Article", // 本章目录标题
            "hide-elements": [".summary .gitbook-link", ".summary .divider"], // 需要隐藏的标签
            // "copyright": {
            //   "author": "uuensky"  // 底部版权展示的作者名
            // }
        }
    },

    "variables": {
        "themeLou": {
            // 顶部导航栏配置
            "nav": [
              {
                "target": "_blank", // 跳转方式: 打开新页面
                "url": "http://...",  // 跳转页面
                "name": "Happy Coding"  // 导航名称
              }
            ],
            // 底部打赏配置
            "footer": {
            //   "donate": {
            //     "button": "捐赠", // 打赏按钮
            //     "avatar": "https://头像地址", // 头像地址
            //     "nickname": "uuensky", // 昵称
            //     "message": "随意打赏，但不要超过一顿早餐钱！", // 打赏消息文本
            //     "text": "『 赠人玫瑰 🌹 手有余香 』", // 打赏话语
            //     "wxpay": "你的微信收款码地址", // 微信收款码
            //     "alipay": "你的支付宝收款码地址" // 支付宝收款码
            //   },
              "copyright": true // 是否显示版权
            }
          }
    },
};