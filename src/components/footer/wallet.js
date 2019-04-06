import React from 'react'

import './style.less'

import I18N from '../../I18N'


export default class extends React.Component {
  render () {
    const isEn = I18N.getLang() === 'en'
    const appId = isEn ? <p className="sub-tag"></p> : <p className="sub-tag">(需海外Apple ID：<a href="/downloads/apple-id-tutorial.pdf">注册教程</a>)</p>
    const iosImg = isEn ? 'wallet-ios@2x.jpg' : 'zh-wallet-ios@2x.jpg'
    const androidImg = 'wallet-android@2x.jpg'
    return (
      <nav className="wallet">
        <div className="title">Elephant Wallet</div>
        <ul>
          <li>
            <div className="group">
              <div className="tag">{I18N.get('footer.wallet.ios')}</div>
              {appId}
            </div>
            <img src={`../images/${iosImg}`} className="spacer" alt="wallet" />
          </li>
          <li>
            <div className="group">
              <div className="tag">{I18N.get('footer.wallet.android')}</div>
              <p className="sub-tag"><a href="https://download.elastos.org/app/elephantwallet/elephant_wallet.apk" target="_blank" rel="noopener noreferrer">{I18N.get('footer.wallet.android.download')}</a></p>
            </div>
            <img src={`../images/${androidImg}`} className="spacer" alt="wallet" />
          </li>
          <li className="filler" />
        </ul>
      </nav>
    )
  }
}
