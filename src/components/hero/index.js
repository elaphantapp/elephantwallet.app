import React from 'react'
import { Row, Col, Button } from 'antd'
import styled from 'styled-components'
import { breakPoint } from '../../constants/variable'
import I18N from '../../I18N'

import topBG from '../../../images/top_background.png'
// import './style.less'

export default class extends React.Component {
  state = {
  }
  render () {

    return (
      <Container className="hero">
        hero
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
const Title = styled.h1`
  font-size: 50px;
  font-weight: 300;
  @media only screen and (max-width: ${breakPoint.mobile}) {
    font-size: 42px;
  }
`
