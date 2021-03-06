import images from '../constants/images'

export default {
    links: {
        telegram: 'https://t.me/elastoswalletelephant',
        privacyPolicy: '/privacy-policy',
        roadmap: 'https://trello.com/b/goEpaLLf/elephant-wallet',
    },
    header: {
        telegram: 'TELEGRAM群',
        tools: '工具',
        developer: {
            title: '开发者',
            link: 'https://github.com/elaphantapp/DeveloperDoc/blob/master/README.md',
        },
        privacyPolicy: '隐私政策',
        Tools: {
            title: '工具',
            mnemonic: {
                title: '助记词',
                url: 'https://elaphant.app/mnemonic.html',
            },
            tradingHistory: {
                title: '交易记录',
                url: 'https://elaphant.app/history.html',
            },
            userStatistics: {
                title: '用户统计',
                url: 'https://elaphant.app/elaphant_users.html',
            },
            multiSignWallet: {
                title: '多签钱包',
                url: 'https://jointaccount.elaphant.app/',
            },
        },
        github: {
            title: 'GITHUB仓库',
            ios: {
                title: 'iOS',
                url: 'https://github.com/elastos/Elastos.App.Wallet.Elephant.iOS',
            },
            android: {
                title: 'Android',
                url: 'https://github.com/elastos/Elastos.App.Wallet.Elephant.Android',
            },
        },
        language: {
            title: 'LANGUAGE',
            en: 'English',
            zh: '中文 (中国)',
        },
    },

    // hero section
    hero: {
        welcome: '欢迎来到大象钱包',
        title: '支持多币种的DApp钱包',
        btnText: '立即下载',
        help: '* 申请海外Apple ID帮助',
        learnMore: '了解更多',
    },

    // intro section
    intro: {
        about: {
            title: '关于我们的App',
            desc: '您的个人数字财产管家。您可以管理您的比特币，以太坊，ELA和许多其它数字货币；以及基于区块链数字身份的Elastos DID，可让您掌握自己的数据。',
        },
        social: {
            telegram: {
                title: '加入Telegram',
                desc: '在我们的电报群中讨论功能并找到问题的答案。欢迎大家加入讨论。',
                btnText: 'Telegram',
                link: 'https://t.me/elastoswalletelephant',
            },
        },
        feature: {
            feature_1: {
                title: 'Elastos DID',
                desc: '支持Elastos DID，您不仅拥有您的数字货币，而且拥有您在互联网上身份的自主权，这让您能够对自己的数据进行确权。',
            },
            feature_2: {
                title: '多币种钱包',
                desc: '支持 BTC，ELA，ERC20 和其它加密数字货币。不需要账户和登录，只需要保存好12个助记词就可以掌握您的财产，没有中心服务器，没有人收集您的信息。',
            },
            feature_3: {
                title: '开源项目',
                desc: '基于开源的Bread钱包开发，具有与它相同的安全特性。简单的操作和页面布局使您可以快速进入区块链世界，而无需学习太多东西。',
            },
        },
    },

    // footer section
    footer: {
        title: '立即下载APP',
        store: {
            title: '从 App Store 和 Google Play Store 下载',
            ios: {
                help: '中国大陆Apple ID无法下载，请申请海外Apple ID。',
                btnText: '注册海外Apple ID向导',
                helpLink: 'https://www.elastos.org/downloads/apple-id-tutorial.pdf',
                storeLink: 'https://apps.apple.com/us/app/elaphant-btc-eth-ela-wallet/id1533611733',
                storeImg: images.appstore_button_img,
            },
            android: {
                help: '直接下载APK',
                btnText: 'Android apk',
                helpLink: 'https://elaphant.app/elaphant.apk',
                storeLink: 'https://play.google.com/store/apps/details?id=org.elastos.elephantwallet',
                storeImg: images.googleplay_button_img,
            },
        },
        qrCode: {
            title: '您也可以直接扫码下载:',
            ios: {
                title: 'iOS版',
                url: images.wallet_ios_img,
            },
            android: {
                title: 'Android版',
                url: images.wallet_android_img,
            },
        },
        privacyPolicy: {
            title: '隐私政策',
            link: '/privacy-policy',
        },
    },
}