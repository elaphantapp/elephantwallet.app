import React from 'react'
import { message } from 'antd'
import styled from 'styled-components'

import './style.less'

import logo from '../../../images/elephant_circle_logo.png'
import I18N from '../../I18N'
import Wallet from './wallet'

export default class extends React.Component {
  state = {
    text: '',
  }

  render () {
    return (
      <Container className="footer" id="footer"><ContainerInner className="container-inner">
        <div className="container">
          <div className="footer-contact">
            <div>
              <img src={logo} className="footer-logo" alt="logo" />
            </div>
            <h2 className="slogan">{I18N.get('footer.title')}</h2>

            <Wallet />
          </div>

        </div>
      </ContainerInner></Container>
    )
  }
}

const Container = styled.div`
`
const ContainerInner = styled.div`
`
