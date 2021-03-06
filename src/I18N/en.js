import images from '../constants/images'

export default {
  links: {
    telegram: 'https://t.me/elastoswalletelephant',
    privacyPolicy: '/privacy-policy',
    roadmap: 'https://trello.com/b/goEpaLLf/elephant-wallet',
  },
  header: {
    telegram: 'TELEGRAM GROUP',
    tools: 'Tools',
    developer: {
      title: 'DEVELOPER',
      link: 'https://github.com/elaphantapp/DeveloperDoc/blob/master/README.md',
    },
	Tools: {
      title: 'Tools',
      mnemonic: {
        title: 'Mnemonic',
        url: 'https://elaphant.app/mnemonic.html',
      },
      tradingHistory: {
        title: 'Trading History',
        url: 'https://elaphant.app/history.html',
      },
	  userStatistics: {
        title: 'User Statistics',
        url: 'https://elaphant.app/elaphant_users.html',
      },
	  multiSignWallet: {
        title: 'Multi-Sign Wallet',
        url: 'https://jointaccount.elaphant.app/',
      },
    },   
    github: {
      title: 'GITHUB REPO',
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
    welcome: 'WELCOME TO THE ELEPHANT WALLET',
    title: 'A multi-currency wallet with DApp support',
    btnText: 'Download the App Now',
    help: '* Chinese users please click here for help with creating an Apple ID',
    learnMore: 'LEARN MORE',
  },

  // intro section
  intro: {
    about: {
      title: 'About our app',
      desc: 'Your personal digital property steward. You can manage your Bitcoin, Ethereum, ELA and many other digital coins; as well as the Elastos DID, which is based on the blockchain digital identity, allowing you to master your own data.',
    },
    social: {
      telegram: {
        title: 'Join Telegram',
        desc: 'Discuss features and find answers to your questions in our telegram group. Everyone is welcome to join and come chat about the app.',
        btnText: 'Telegram',
        link: 'https://t.me/elastoswalletelephant',
      },
    },
    feature: {
      feature_1: {
        title: 'Elastos DID',
        desc: 'Supports Elastos DID, so you can fully grasp your identity on the internet as you master digital currency, and you can use the DID to determine your own data.',
      },
      feature_2: {
        title: 'Multi-Currency Crypto Wallet',
        desc: 'Supports BTC, ELA, ERC20 and other encrypted coins. No account, no login, just keep your 12 mnemonics safe and you control your property, no back-end server, no one collects your information.',
      },
      feature_3: {
        title: 'Open Source Project',
        desc: 'Based on the open source bread wallet development; it has the same security features. Simple operation and page layout allow you to master the key to the blockchain world without having to learn too much.',
      },
    },
  },

  // footer section
  footer: {
    title: 'DOWNLOAD THE APP NOW',
    store: {
      title: 'Download on the App Store and Google Play Store',
      ios: {
        help: 'Chinese users please use the button below for help with creating and Apple ID.',
        btnText: 'Apple ID Help',
        helpLink: 'https://www.elastos.org/downloads/apple-id-tutorial.pdf',
        storeLink: 'https://apps.apple.com/us/app/elaphant-btc-eth-ela-wallet/id1533611733',
        storeImg: images.appstore_button_img,
      },
      android: {
        help: 'Use the button below to directly download the apk.',
        btnText: 'Android apk',
        helpLink: 'https://elaphant.app/elaphant.apk',
        storeLink: 'https://play.google.com/store/apps/details?id=org.elastos.elephantwallet',
        storeImg: images.googleplay_button_img,
      },
    },
    qrCode: {
      title: 'You can also use the QR codes below:',
      ios: {
        title: 'iOS Version',
        url: images.wallet_ios_img,
      },
      android: {
        title: 'Android Version',
        url: images.wallet_android_img,
      },
    },
    privacyPolicy: {
      title: 'Privacy Policy',
      link: '/privacy-policy',
    },
  },
}
