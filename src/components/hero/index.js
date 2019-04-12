import React from 'react'
import { Row, Col, Button } from 'antd'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'
import I18N from '../../I18N'

import { breakPoint } from '../../constants/variable'
import images from '../../constants/images'
import * as colors from '../../constants/color'

// import './style.less'

export default () => (
  <Container id="hero"><ContainerInner>
    <StyledRow>
      <Col xs={24} sm={14}>
        <SubTitle>{I18N.get('hero.welcome')}</SubTitle>
        <Title>{I18N.get('hero.title')}</Title>
        <StyledButton shape="round" href="#footer">
          <ButtonInner>
            <StyledIcon src={images.logo_img} alt="icon" />
            {I18N.get('hero.btnText')}
          </ButtonInner>
        </StyledButton>
        <Help href={I18N.get('footer.store.ios.helpLink')} target="_blank" rel="noopener noreferrer">{I18N.get('hero.help')}</Help>
      </Col>
      <Col xs={24} sm={10}>
        <MediaQuery maxWidth={breakPoint.mobile}>
          <WalletImg mobile src={images.hero_phone_image_mobile_img} alt="wallet image" />
        </MediaQuery>
        <MediaQuery minWidth={breakPoint.mobile}>
          <WalletImg src={images.hero_phone_image_img} alt="wallet image" />
        </MediaQuery>
      </Col>
    </StyledRow>
    <BottomRow>
      <LearnMore href="#intro">
        <div>{I18N.get('hero.learnMore')}</div>
        <Circle><DownArrow src={images.down_arrow_img} alt="down arrow" /></Circle>
      </LearnMore>
    </BottomRow>
  </ContainerInner></Container>
)

const Container = styled.div`
  position: relative;
  padding-top: 100px;
  text-align: left;
  background: url(${images.top_background_img}) no-repeat;
  background-size: cover;
  background-position-x: right;
  background-position-y: 100%;
  color: white;
  @media only screen and (max-width: ${breakPoint.mobile}) {
    background: url(${images.top_background_mobile_img}) no-repeat;
    margin-bottom: 200px;
    padding-bottom: 100px;
  }
`
const ContainerInner = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 70px;
`
const StyledRow = styled(Row)`
`
const BottomRow = styled(Row)`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -30%);
`
const SubTitle = styled.div`
  font-size: 13px;
  font-weight: bold;
  margin-top: 60px;
  @media only screen and (max-width: ${breakPoint.mobile}) {
    margin-top: 0;
  }
`
const Title = styled.h1`
  font-size: 42px;
  font-weight: bolder;
  color: white;
  margin-top: 15px;
  line-height: 1.2em;
  margin: 30px auto 40px;
  @media only screen and (max-width: ${breakPoint.mobile}) {
    font-size: 36px;
  }
`
const StyledButton = styled(Button)`
  color: ${colors.text.theme};
  padding: 0 30px;
  font-size: 14px;
  :hover {
    color: ${colors.text.theme};
  }
`
const ButtonInner = styled.div`
  display: flex;
  align-items: center;
`
const StyledIcon = styled.img`
  height: 14px;
  margin-right: 15px;
`

const Help = styled.a`
  margin-top: 25px;
  font-weight: lighter;
  font-size: 13px;
  color: white;
  display: block;
  :hover {
    color: white;
  }
`
const WalletImg = styled.img`
  @media only screen and (max-width: ${breakPoint.mobile}) {
    position: absolute;
    top: 40px;
  }
`
const Circle = styled.div`
  background: #FD8129;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const DownArrow = styled.img`
  height: 20px;
`
const LearnMore = styled.a`
  text-align: center;
  font-size: 12px;
  font-size: 12px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :hover {
    color: inherit;
  }
  @media only screen and (max-width: ${breakPoint.mobile}) {
    display: none;
  }
`
