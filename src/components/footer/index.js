import React from 'react'
import { message } from 'antd'

import './style.less'

import logo from '../../../images/elephant_circle_logo.png'
import I18N from '../../I18N'
import Wallet from './wallet'
import Social from './social'

let $
if (typeof window !== 'undefined') {
  // browser-only code
  $ = window.$
}

export default class extends React.Component {
  state = {
    text: '',
  }

  onChange = async e => {
    const text = e.target.value
    this.setState({ text })
  }

  // mailchimp does not support CORS settings, chrome will block the request, we use jquery jsonp to solve the issue
  sendMail = async () => {
    const url = `https://elastos.us17.list-manage.com/subscribe/post-json?u=8d74b221b8912cf1478a69f37&id=0f5b89d273&EMAIL=${this.state.text}`
    // browser only
    if (!$) return
    $.ajax({
      url,
      type: 'GET',
      // data: formURL,
      dataType: 'jsonp',
      jsonp: 'c',
      contentType: 'application/json; charset=utf-8',

      success: data => {
        if (data.result === 'error') {
          message.info(`Fail to subscribed: ${data.msg}`)
        } else {
          message.info('Thank you for subscribing!')
          this.setState({ text: '' })
        }
      },
    })
  }

  render () {
    const url = I18N.getLang() === 'en' ? 'https://news.elastos.org/wp-content/uploads/2019/01/Elastos-EOY-Report-2018.pdf' : 'https://news-zh.elastos.org/%E4%BA%A6%E6%9D%A5%E4%BA%912018%E5%B9%B4%E5%BA%A6%E6%8A%A5%E5%91%8A/'

    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-contact">

            <img src={logo} className="footer-logo" alt="logo" />
            <h2 className="slogan">{I18N.get('footer.title')}</h2>

            <Wallet />
          </div>

        </div>
      </footer>
    )
  }
}

