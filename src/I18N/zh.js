import images from '../constants/images'

export default {
  links: {
    elastos: 'https://elastos.org',
    telegram: 'https://t.me/elastoswalletelephant',
  },
  header: {
    elastos: 'ELASTOS HOMEPAGE',
    telegram: 'TELEGRAM GROUP',
    github: {
      title: 'GITHUB REPO',
      ios: {
        title: 'IOS',
        url: 'https://github.com/elastos/Elastos.App.Wallet.Elephant.iOS',
      },
      android: {
        title: 'ANDROID',
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
      desc: '您的个人数字财产管家。 您可以管理您的比特币，以太坊，ELA和许多其他数字硬币; 以及基于区块链数字身份的Elastos DID，可让您掌握自己的数据。',
    },
    social: {
      telegram: {
        title: '加入 Telegram',
        desc: '在我们的电报小组中讨论功能并找到问题的答案。 欢迎大家加入讨论。',
        btnText: 'Telegram',
        link: 'https://t.me/elastoswalletelephant',
      },
    },
    feature: {
      feature_1: {
        title: 'Elastos DID',
        desc: '支持Elastos DID，您不仅可以拥有您的数字货币，同时对您在互联网上的身份拥有自我主权，让您可以对自己的数据确权。',
      },
      feature_2: {
        title: '多币种钱包',
        desc: '支持 BTC, ELA, ERC20 和其它加密数字币. 不需要账户和登录, 只需要保存好12个助记词就可以掌握你的财产, 没有中心服务器, 没有人收集你的信息。',
      },
      feature_3: {
        title: '开源项目',
        desc: '基于开源的Bread钱包开发，具有与它相同的安全特性。 简单的操作和页面布局使您可以快速进入区块链世界，而无需学习太多东西。',
      },
    },
  },

  // footer section
  footer: {
    title: '立即下载APP',
    store: {
      title: '从 App Store 和 Google Play Store 下载',
      ios: {
        help: '需要海外Apple ID，请点击下面链接查看注册海外Apple ID的帮助。',
        btnText: '注册海外Apple ID向导',
        helpLink: 'https://www.elastos.org/downloads/apple-id-tutorial.pdf',
        storeLink: 'https://itunes.apple.com/app/elastos-elephant-wallet/id1446241279',
        storeImg: images.appstore_button_img,
      },
      android: {
        help: '直接下载APK.',
        btnText: 'Android apk',
        helpLink: 'https://download.elastos.org/app/elephantwallet/elephant_wallet.apk',
        storeLink: 'https://play.google.com/store/apps/details?id=com.elastos.wallet',
        storeImg: images.googleplay_button_img,
      },
    },
    qrCode: {
      title: '你也可以直接扫码下载:',
      ios: {
        title: 'iOS版',
        url: images.wallet_android_img,
      },
      android: {
        title: 'Android版',
        url: images.wallet_ios_img,
      },
    },
  },
}
