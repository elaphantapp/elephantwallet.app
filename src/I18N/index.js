import _ from 'lodash';
import en from './en';
import zh from './zh';


const all = _.extend({}, {
  zh,
  en,
});

let lang = 'en'

if (typeof location !== 'undefined' && !localStorage.getItem('lang')) {
  const pathname = _.get(location, 'pathname', '')
  if (pathname === '/zh' || pathname === '/zh/') {
    localStorage.setItem('lang', 'zh')
    location.replace('/')
  }
  // else if (pathname === '/en' || pathname === '/en/') {
  //   localStorage.setItem('lang', 'en')
  // }

  // const search = _.get(location, 'search', '')
  // if (_.includes(search, '?lang=zh')) {
  //   localStorage.setItem('lang', 'zh')
  // } else if (_.includes(search, '?lang=en')) {
  //   localStorage.setItem('lang', 'en')
  // }
}

if (typeof localStorage !== 'undefined') {
  // browser-only code
  lang = localStorage.getItem('lang') || 'en';
}

export default {
  setLang(str) {
    if (_.includes(['zh', 'en'], str)) {
      lang = str;
      localStorage.setItem('lang', lang)
      window.location.reload()
    } else {
      throw new Error(`invalid lang : ${str}`);
    }
  },
  getLang() {
    return lang;
  },

  get(key) {
    return _.get(all[lang], key, _.get(all.en, key, key));
  },
};
