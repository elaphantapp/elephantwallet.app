import React from 'react'
import styled from 'styled-components'
import { Button, Icon } from 'antd'
import I18N from '../../I18N'
import { breakPoint } from '../../constants/variable'
import * as colors from '../../constants/color'

export default class extends React.Component {
  render () {
    return (
      <Container>
        <Title>{I18N.get('footer.title')}</Title>
        <div>{I18N.get('footer.store.title')}</div>
        <List>
          <ListItem>
            <a href={I18N.get('footer.store.ios.storeLink')} target="_blank" rel="noopener noreferrer">
              <StoreImg src={I18N.get('footer.store.ios.storeImg')} className="spacer" alt="download url" />
            </a>
            <Help>{I18N.get('footer.store.ios.help')}</Help>
            <StyledButton shape="round" href={I18N.get('footer.store.ios.helpLink')} target="_blank" rel="noopener noreferrer">
              <StyledIcon type="apple" theme="filled" />
              {I18N.get('footer.store.ios.btnText')}
            </StyledButton>
          </ListItem>
          <ListItem>
            <a href={I18N.get('footer.store.android.storeLink')} target="_blank" rel="noopener noreferrer">
              <StoreImg src={I18N.get('footer.store.android.storeImg')} className="spacer" alt="download url" />
            </a>
            <Help>{I18N.get('footer.store.android.help')}</Help>
            <StyledButton shape="round" href={I18N.get('footer.store.android.helpLink')} target="_blank">
              <StyledIcon type="android" theme="filled" />
              {I18N.get('footer.store.android.btnText')}
            </StyledButton>
          </ListItem>
        </List>

        <QRTitle>{I18N.get('footer.qrCode.title')}</QRTitle>
        <List>
          <ListItem>
            <ImgTitle>{I18N.get('footer.qrCode.ios.title')}</ImgTitle>
            <QRImg src={I18N.get('footer.qrCode.ios.url')} className="spacer" alt="wallet" />
          </ListItem>
          <ListItem>
            <ImgTitle>{I18N.get('footer.qrCode.android.title')}</ImgTitle>
            <QRImg src={I18N.get('footer.qrCode.android.url')} className="spacer" alt="wallet" />
          </ListItem>
        </List>
      </Container>
    )
  }
}

const Container = styled.div`
  max-width: 450px;
  margin: 30px auto;
`
const Title = styled.h2`
  font-size: 32px;
  font-weight: 400;
  color: white;
  @media only screen and (max-width: ${breakPoint.mobile}) {
    font-size: 20px;
  }
`
const Help = styled.div`
  height: 4rem;
  margin-top: 20px;
  margin-bottom: 20px;
  @media only screen and (max-width: ${breakPoint.mobile}) {
    height: auto;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`
const StoreImg = styled.img`
  height: 70px;
`
const StyledButton = styled(Button)`
  font-size: 14px;
  color: ${colors.text.theme};
  border: none;
  :hover {
    color: ${colors.text.theme};
  }
  @media only screen and (max-width: ${breakPoint.mobile}) {
    margin-bottom: 20px;
  }
`
const StyledIcon = styled(Icon)`
`
const List = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 14px;
  @media only screen and (max-width: ${breakPoint.mobile}) {
    flex-direction: column;
  }
`
const ListItem = styled.div`
  flex: 200px 0 0;
  margin-bottom: 20px;
`
const QRTitle = styled.h4`
  font-size: 16px;
  color: white;
  padding-top: 30px;
  border-top: 1px solid white;
`

const ImgTitle = styled.div`
  margin-bottom: 10px;
`
const QRImg = styled.img`
  height: 200px;
`
