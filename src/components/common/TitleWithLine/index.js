import React from 'react'
import styled from 'styled-components'
import titleLineImg from '../../../../images/ecosystem_title_line.png'
import crLogoImg from '../../../../images/cr_logo.png'

import { text } from '../../../constants/color'
import { breakPoint } from '../../../constants/variable'

import '../../../common.less'

export default class extends React.Component {
  render () {
    const { label, title, titleSize, titleColor, titleWeight, img, line, style, linewrap } = this.props
    return (
      <Container>
        <Title titleColor={titleColor || 'blue'} titleSize={titleSize || '10px'} titleWeight={titleWeight || 400}>
          {label || 'ELASTOS'}
          <Line src={ line || titleLineImg} linewrap={!!linewrap} />
        </Title>
        {img && <StyledImg src={crLogoImg} />}
        {title && <SubTitle>{title}</SubTitle>}
      </Container>
    )
  }
}

const Container = styled.div`
  text-align: left;
`

const Title = styled.div`
  font-weight: ${props => props.titleWeight};
  font-size: ${props => props.titleSize};
  color: ${props => text[props.titleColor]};
`

const Line = styled.img`
  width: 100px;
  height: 1px;
  padding-left: 10px;
  @media only screen and (max-width: ${breakPoint.mobile}) {
    padding-left: ${props => props.linewrap ? 0 : '10px'};
    display: ${props => props.linewrap ? 'block' : 'inline'};
    margin-top: ${props => props.linewrap ? '10px' : 0};
  }
`

const StyledImg = styled.img`
  width: 50px;
`

const SubTitle = styled.span`
  padding-top: 24px;
  font-size: 36px;
`
