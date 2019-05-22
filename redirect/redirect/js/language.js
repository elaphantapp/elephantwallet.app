var en = {
    "pc-1": "Open Elephant App to scan",
    "jump_elephant_wallet": "Elephant Wallet",
    "jump_elephant_first_instruction": "1.Tap the top-right menu",
    "jump_elephant_second_instruction_1": "2.Then tap",
    "jump_elephant_second_instruction_2": "Open in external browser",
    "jump_elephant_second_instruction_3": "go to your wallet app",
    "jump_elephant_third_instruction": "Create a red packet",
    "jump_elephant_third_instruction_1": "Receive a red packet",
    "jump_elephant_four_instruction": "Please launch elephant app to finish the red packet creation.",
    "jump_elephant_four_instruction_1": "Please launch elephant app to receive the red packet.",
    "luanchElephant": "Launch Elephant",
    'Download': "Download",
    "elephant_ios_appstore_download": "Download",
    "elephant_andriod_googleplay_download": "Download",
    "elephant_andriod_server_download": "APK Download"
};


var cn = {
    "pc-1": "打开大象App扫描",
    "jump_elephant_wallet": "大象钱包",
    "jump_elephant_first_instruction": "1.点击右侧顶部菜单",
    "jump_elephant_second_instruction_1": "2.然后点击",
    "jump_elephant_second_instruction_2": "在外部浏览器中打开",
    "jump_elephant_second_instruction_3": "进入你的钱包",
    "jump_elephant_third_instruction": "Create a red packet",
    "jump_elephant_third_instruction_1": "Receive a red packet",
    "jump_elephant_four_instruction": "Please launch elephant app to finish the red packet creation.",
    "jump_elephant_four_instruction_1": "Please launch elephant app to receive the red packet.",
    "luanchElephant": "启动大象钱包",
    'Download': "Download",
    "elephant_ios_appstore_download": "下载大象钱包", //下载大象钱包
    "elephant_andriod_googleplay_download": "下载大象钱包", //下载大象钱包
    "elephant_andriod_server_download": "APK下载"
};

function get_lan(Tip) {
    //获取文字
    var lan = "zh"; //语言版本
    var JsSrc = (navigator.language || navigator.browserLanguage).toLowerCase();
    if (JsSrc.indexOf('zh') >= 0) {
        // 假如浏览器语言是中文
        lan = "zh";
    } else if (JsSrc.indexOf('en') >= 0) {
        lan = "en";
    } else {
        // 假如浏览器语言是其它语言
        lan = "en";
    }

    //选取语言文字
    switch (lan) {
        case 'en':
            var t = en[Tip];
            break;
        case 'zh':
            var t = cn[Tip];
            break;
        default:
            var t = en[Tip];
    }

    //如果所选语言的json中没有此内容就选取其他语言显示
    if (t == undefined) t = cn[Tip];
    if (t == undefined) t = en[Tip];

    if (t == undefined) t = Tip; //如果还是没有就返回他的标识

    return t;
}