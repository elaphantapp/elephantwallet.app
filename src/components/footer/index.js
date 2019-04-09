import React from 'react'
import styled from 'styled-components'
import I18N from '../../I18N'
import Wallet from './wallet'
import images from '../../constants/images'
// import './style.less'

export default class extends React.Component {
  state = {
    text: '',
  }

  render () {
    return (
      <Container id="footer"><ContainerInner className="container-inner">
        <LogoContainer>
          <Logo src={images.elephant_circle_logo_img} className="footer-logo" alt="logo" />
        </LogoContainer>
        <Wallet />
      </ContainerInner></Container>
    )
  }
}

const Container = styled.div`
  position: relative;
  text-align: center;
  background-image: url(${images.bottom_background_img});
  background-size: cover;
  color: white;
  /* @media only screen and (max-width: 768px) { */
    /* background-image: url("../../../images/mobile/bottom_background.png"); */
    /* } */
`
const ContainerInner = styled.div`
  padding-top: 60px;
  padding-bottom: 40px;
`
const LogoContainer = styled.div`
  text-align: center;
  position: absolute;
  left: calc(50% - 40px);
  top: -40px;
`
const Logo = styled.img`
  height: 80px;
`
