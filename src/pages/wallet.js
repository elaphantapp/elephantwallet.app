import React from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import headerBgImg from '../../images/team-bg@2x.png'
import { text, bg } from '../../constants/color'

import { breakPoint } from '../constants/variable'

export default class extends React.Component {
  render () {
    return (
      <Container>
        <BgRight src={headerBgImg} />
        <Inner>
          <Title>Elastos Wallets</Title>
          <ListContainer>
            <Item xs={24} md={8}>
              <ItemContent>
                {/* <Icon src={ExpandIconImage} type="expand"/> */}
                <ItemTitle>ELASTOS WEB WALLET</ItemTitle>
                <ItemText>
                  Our official web wallet, and the easiest to setup and use
                  <br/>
                  <br/>
                  <a href="https://wallet.elastos.org">https://wallet.elastos.org</a>
                </ItemText>
              </ItemContent>
            </Item>
            <Item xs={24} md={8}>
              <ItemContent>
                {/* <Icon src={ExpandIconImage} type="expand"/> */}
                <ItemTitle>ELASTOS ELEPHANT WALLET</ItemTitle>
                <ItemText>
                  Our ecosystem wallet with all our partners and more
                  <br/>
                  <br/>
                  <a href="https://download.elastos.org/app/elephantwallet/elephant_wallet.apk">Download</a>
                </ItemText>
              </ItemContent>
            </Item>
            <Item xs={24} md={8}>
              <ItemContent>
                {/* <Icon src={ExpandIconImage} type="expand"/> */}
                <ItemTitle>ELASTOS SPV WALLET</ItemTitle>
                <ItemText>
                  Powerful wallet for advanced users.
                  <br/>
                  <br/>
                  <a href="https://github.com/elastos/Elastos.App.Wallet.Android/releases">https://github.com/elastos/Elastos.App.Wallet.Android/releases</a>
                </ItemText>
              </ItemContent>
            </Item>
          </ListContainer>
        </Inner>
      </Container>
    )
  }
}


const Container = styled.div`
  position: relative;
`
const BgRight = styled.img`
  position: absolute;
  right: 0;
  top: -25px;
  width: 450px;
  z-index: -1;
`
const Inner = styled.div`
  max-width: 950px;
  margin: 0 auto;
  padding: 100px 0;
  @media only screen and (max-width: ${breakPoint.mobile}) {
    padding-top: 140px;
  }
`
const Title = styled.div`
  font-size: 64px;
  letter-spacing: -0.02em;
  @media only screen and (max-width: ${breakPoint.mobile}) {

  }
`
const ListContainer = styled(Row)`
  width: calc(100% - 300px);
  max-width: 850px;
  margin: auto;
  @media only screen and (max-width: ${breakPoint.mobile}) {
    width: 100%;
  }
`
const Item = styled(Col)`
  position: relative;
  background-color: #0F2D3B;
  color: white;
  height: 200px;
  width: 200px;
  margin: 30px;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: ${breakPoint.mobile}) {
    margin: 12px 0;
  }
`
const ItemContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`
const ItemTitle = styled.div`
  font-size: 12px;
  margin-bottom: 10px;
  @media only screen and (max-width: ${breakPoint.mobile}) {
    font-size: 24px;
  }
`
const ItemText = styled.div`
  font-size: 10px;
  @media only screen and (max-width: ${breakPoint.mobile}) {
    font-size: 16px;
  }
`
