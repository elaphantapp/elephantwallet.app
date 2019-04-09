import React from 'react'
import { Row, Col, Button } from 'antd'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'
import I18N from '../../I18N'

import { breakPoint } from '../../constants/variable'
import images from '../../constants/images'
import * as colors from '../../constants/color'

// import './style.less'

export default class extends React.Component {
  state = {
  }
  render () {
    return (
      <Container><ContainerInner className="container-inner">
        <Row>
          <Col xs={24} sm={14}>
            <SubTitle>{I18N.get('hero.welcome')}</SubTitle>
            <Title>{I18N.get('hero.title')}</Title>
            <StyledButton shape="round" href="#footer">
              <ButtonInner>
                <StyledIcon src={images.logo_img} alt="icon" />
                {I18N.get('hero.btnText')}
              </ButtonInner>
            </StyledButton>
            <Help>{I18N.get('hero.help')}</Help>
          </Col>
          <Col xs={24} sm={10}>
            <MediaQuery maxWidth={breakPoint.mobile}>
              <WalletImg mobile src={images.hero_phone_image_mobile_img} alt="wallet image" />
            </MediaQuery>
            <MediaQuery minWidth={breakPoint.mobile}>
              <WalletImg src={images.hero_phone_image_img} alt="wallet image" />
            </MediaQuery>
          </Col>
        </Row>
        <BottomRow>
          <LearnMore href="#intro">
            <div>{I18N.get('hero.learnMore')}</div>
            <div><DownArrow src={images.down_arrow_img} alt="down arrow" /></div>
          </LearnMore>
        </BottomRow>
      </ContainerInner></Container>
    )
  }
}

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
  padding-bottom: 70px;
  @media only screen and (max-width: ${breakPoint.mobile}) {
  }
`
const BottomRow = styled(Row)`
  height: 35px;
  position: initial;
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

const Help = styled.div`
  margin-top: 25px;
  font-weight: lighter;
  font-size: 13px;
`
const WalletImg = styled.img`
  @media only screen and (max-width: ${breakPoint.mobile}) {
    position: absolute;
    top: 40px;
  }
`
const DownArrow = styled.img`
  height: 20px;
`
const LearnMore = styled.a`
  text-align: center;
  font-size: 12px;
  position: absolute;
  font-size: 12px;
  right: 26%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  :hover {
    color: inherit;
  }
  @media only screen and (max-width: ${breakPoint.mobile}) {
    display: none;
  }
`
