import React from 'react'
import styled from 'styled-components'
import titleLineImg from '../../../../images/ecosystem_title_line.png'
import { breakPoint } from '../../../constants/variable'

import '../../../common.less'
import './style.less'

export default class extends React.Component {
  render () {
    const { title } = this.props
    return (
      <Container>
        <HeaderLine src={titleLineImg} />
        {title || 'ELASTOS'}
        <HeaderLine src={titleLineImg} />
      </Container>
    )
  }
}

const Container = styled.div`
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 40px;
`

const HeaderLine = styled.img`
  width: 390px;
  height: 1px;
  padding-left: 10px;
  padding-right: 10px;
  @media only screen and (max-width: ${breakPoint.mobile}) {
    width: 80px;
  }
`
