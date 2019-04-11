import React from 'react'
import { Row, Col, Button } from 'antd'
import styled from 'styled-components'
import I18N from '../../I18N'
import { breakPoint } from '../../constants/variable'
import images from '../../constants/images'
import * as colors from '../../constants/color'
import '../../common.less'
import Footer from '../footer'

export default class extends React.Component {
  state = {
  }
  render () {
    return (
      <div>
        <Container id="intro"><ContainerInner className="container-inner">
          <StyledRow gutter={24}>
            <Col xs={24} sm={{ span: 6, offset: 2 }}>
              <Title>{I18N.get('intro.about.title')}</Title>
            </Col>
            <Col xs={24} sm={16}>
              <Desc>{I18N.get('intro.about.desc')}</Desc>
            </Col>
          </StyledRow>
          <StyledRow gutter={24}>
            <Col xs={24} sm={{ span: 6, offset: 2 }}>
              <Title>{I18N.get('intro.social.telegram.title')}</Title>
            </Col>
            <Col xs={24} sm={16}>
              <Desc>{I18N.get('intro.social.telegram.desc')}</Desc>
              <BtnContainer>
                <SocialButton href={I18N.get('links.telegram')} shape="round" target="_blank" rel="noopener noreferrer">
                  <BtnImg src={images.telegram_icon_img} className="spacer" alt="download url" />
                  <BtnText>{I18N.get('intro.social.telegram.btnText')}</BtnText>
                </SocialButton>
              </BtnContainer>
            </Col>
          </StyledRow>
          <FeatureRow gutter={24}>
            <FeatureItem xs={24} sm={8}>
              <FeatureImg src={images.did_icon_img} className="spacer" alt="download url" />
              <FeatureTitle>{I18N.get('intro.feature.feature_1.title')}</FeatureTitle>
              <FeatureDesc>{I18N.get('intro.feature.feature_1.desc')}</FeatureDesc>
            </FeatureItem>
            <FeatureItem xs={24} sm={8}>
              <FeatureImg src={images.multi_icon_img} className="spacer" alt="download url" />
              <FeatureTitle>{I18N.get('intro.feature.feature_2.title')}</FeatureTitle>
              <FeatureDesc>{I18N.get('intro.feature.feature_2.desc')}</FeatureDesc>
            </FeatureItem>
            <FeatureItem xs={24} sm={8}>
              <FeatureImg src={images.opensource_icon_img} className="spacer" alt="download url" />
              <FeatureTitle>{I18N.get('intro.feature.feature_3.title')}</FeatureTitle>
              <FeatureDesc>{I18N.get('intro.feature.feature_3.desc')}</FeatureDesc>
            </FeatureItem>
          </FeatureRow>
        </ContainerInner></Container>
        {/* workaround: put footer here due to build duplicate class with header */}
        <Footer />
      </div>
    )
  }
}

const Container = styled.div`
  position: relative;
  background-color: white;
  color: ${colors.text.theme};
  @media only screen and (max-width: ${breakPoint.mobile}) {
    overflow: hidden;
  }
`

const ContainerInner = styled.div`
  /* max-width: 1200px;
  margin: 0 auto; */
  height: 100%;
  padding-left: 40px;
  padding-right: 40px;
  max-width: 960px;
  margin: 40px auto;
  @media only screen and (max-width: ${breakPoint.mobile}) {
  }
`
const StyledRow = styled(Row)`
  text-align: left;
  margin-bottom: 30px;
`
const Title = styled.h2`
  color: ${colors.text.theme};
  font-size: 24px;
  /* @media only screen and (max-width: ${breakPoint.mobile}) {
  } */
`
const Desc = styled.div`
  font-size: 14px;
`
const FeatureRow = styled(Row)`
  padding-top: 40px;
  margin-top: 40px;
  border-top: 1px solid ${colors.border.theme};
`
const FeatureItem = styled(Col)`
  text-align: center;
  margin-bottom: 30px;
`
const FeatureImg = styled.img`
  height: 100px;
`
const FeatureTitle = styled.h3`
  color: ${colors.text.theme};
  font-size: 16px;
  margin: 15px auto;
`
const FeatureDesc = styled.div`
  font-size: 14px;
  line-height: 1.5em;
`

const BtnContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`

const SocialButton = styled(Button)`
  border: none;
  background-color: ${colors.bg.theme};
  color: white;
  font-weight: 14px;
  padding: 0 20px;
  :hover {
    background-color: ${colors.bg.theme};
    color: white;
  }
`
const BtnImg = styled.img`
  height: 16px;
  margin-right: 10px;
`

const BtnText = styled.span`

`
