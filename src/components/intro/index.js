import React from 'react'
import { Row, Col, Button } from 'antd'
import styled from 'styled-components'
import I18N from '../../I18N'
import { breakPoint } from '../../constants/variable'
import images from '../../constants/images'
import * as colors from '../../constants/color'
import '../../common.less'

export default class extends React.Component {
  state = {
  }
  render () {
    return (
      <Container id="intro"><ContainerInner className="container-inner">
        <Row>
          <Col>
            <div>{I18N.get('intro.about.title')}</div>
          </Col>
          <Col>
            <div>{I18N.get('intro.about.desc')}</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>{I18N.get('intro.social.telegram.title')}</div>
          </Col>
          <Col>
            <div>{I18N.get('intro.social.telegram.desc')}</div>
            <SocialButton href={I18N.get('intro.social.telegram.url')} shape="round" target="_blank" rel="noopener noreferrer">
              <BtnImg src={images.telegram_icon_img} className="spacer" alt="download url" />
              <BtnText>{I18N.get('intro.social.telegram.btnText')}</BtnText>
            </SocialButton>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={images.did_icon_img} className="spacer" alt="download url" />
            <div>{I18N.get('intro.feature.feature_1.title')}</div>
            <div>{I18N.get('intro.feature.feature_1.desc')}</div>
          </Col>
          <Col>
            <img src={images.multi_icon_img} className="spacer" alt="download url" />
            <div>{I18N.get('intro.feature.feature_2.title')}</div>
            <div>{I18N.get('intro.feature.feature_2.desc')}</div>
          </Col>
          <Col>
            <img src={images.opensource_icon_img} className="spacer" alt="download url" />
            <div>{I18N.get('intro.feature.feature_3.title')}</div>
            <div>{I18N.get('intro.feature.feature_3.desc')}</div>
          </Col>
        </Row>
      </ContainerInner></Container>
    )
  }
}

const Container = styled.div`
  position: relative;
  margin: 80px 0 100px;
  background-color: white;
  @media only screen and (max-width: ${breakPoint.mobile}) {
    overflow: hidden;
  }
`

const ContainerInner = styled.div`
  @media only screen and (max-width: ${breakPoint.mobile}) {
  }
`

const Title = styled.h1`
  font-size: 50px;
  font-weight: 300;
  @media only screen and (max-width: ${breakPoint.mobile}) {
    font-size: 42px;
  }
`

const SocialButton = styled(Button)`
  background-color: ${colors.bg.theme};
  color: white;
`
const BtnImg = styled.img`
  height: 16px;
`

const BtnText = styled.span`
`
