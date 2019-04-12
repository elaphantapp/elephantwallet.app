import React from 'react'
import styled from 'styled-components'
// import I18N from '../../I18N'
import Wallet from './wallet'
import { breakPoint } from '../../constants/variable'
import images from '../../constants/images'

export default class extends React.Component {
  render () {
    return (
      <Container id="footer"><Inner id="footer-inner">
        <LogoContainer>
          <Logo src={images.elephant_circle_logo_img} className="footer-logo" alt="logo" />
        </LogoContainer>
        <Wallet />
      </Inner></Container>
    )
  }
}

const Container = styled.div`
  position: relative;
  text-align: center;
  background: url(${images.bottom_background_img}) no-repeat;
  background-size: cover;
  color: white;
  @media only screen and (max-width: ${breakPoint.mobile}) {
    background: url(${images.bottom_background_mobile_img}) no-repeat;
    /* margin-bottom: 200px;
    padding-bottom: 100px; */
  }
`
const Inner = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 40px;
`
const LogoContainer = styled.div`
  text-align: center;
  /* position: absolute;
  left: calc(50% - 40px);
  top: -40px; */
`
const Logo = styled.img`
  height: 80px;
`
