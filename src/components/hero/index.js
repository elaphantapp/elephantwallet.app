import React from 'react'
import { Row, Col, Button, Icon } from 'antd'
import styled from 'styled-components'
import I18N from '../../I18N'

import topBG from '../../../images/top_background.png'
import { breakPoint } from '../../constants/variable'
import images from '../../constants/images'
import * as colors from '../../constants/color'

// import './style.less'

export default class extends React.Component {
  state = {
  }
  render () {
    return (
      <Container>
        <SubTitle>{I18N.get('hero.welcome')}</SubTitle>
        <Title>{I18N.get('hero.title')}</Title>
        <StyledButton shape="round" href="#footer">
          <StyledIcon src={images.logo_img} alt="icon" />
          {I18N.get('hero.btnText')}
        </StyledButton>
        <Help>{I18N.get('hero.help')}</Help>
        <WalletImg />
        <LearnMore href="#intro">
          {I18N.get('hero.learnMore')}
          <img src={images.down_arrow_img} alt="down arrow" />
        </LearnMore>
      </Container>
    )
  }
}

const Container = styled.div`
  position: relative;
  margin: 80px 0 100px;
  background-color: white;
  background-image: url(${topBG});
  background-size: cover;
  color: white;

  @media only screen and (max-width: ${breakPoint.mobile}) {
    overflow: hidden;
  }
`
const SubTitle = styled.div`
`
const StyledButton = styled(Button)`
  color: ${colors.text.theme};
`
const StyledIcon = styled.img`
  height: 16px;
`

const Help = styled.div`
`
const Title = styled.h1`
  font-size: 50px;
  font-weight: 300;
  @media only screen and (max-width: ${breakPoint.mobile}) {
    font-size: 42px;
  }
`
const WalletImg = styled.img`

`
const LearnMore = styled.a`

`