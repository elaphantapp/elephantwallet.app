import React from 'react'
import styled from 'styled-components'
// import I18N from '../../I18N'
import Wallet from './wallet'
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
  background-image: url(${images.bottom_background_img});
  background-size: cover;
  color: white;
`
const Inner = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding-left: 40px;
  padding-right: 40px;
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
