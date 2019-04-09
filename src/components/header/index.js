import React from 'react'
import styled, { css } from 'styled-components'

import MediaQuery from 'react-responsive'
import { Drawer, Dropdown, Menu, Icon } from 'antd'
import { breakPoint } from '../../constants/variable'

import logo from '../../../images/elephant_logo.png'
import dropdown from '../../../images/language_dropdown.png'
import * as colors from '../../constants/color'

import I18N from '../../I18N'

import './style.less'

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      drawerVisible: false,
    }
  }

  render () {
    return (
      <Container>
        <LogoContainer>
          <a href="/">
            <Logo src={logo} />
          </a>
        </LogoContainer>

        <MediaQuery minWidth={breakPoint.mobile}>
          <NavBar>
            <a href={I18N.get('links.elastos')} target="_blank" rel="noopener noreferrer">{I18N.get('header.elastos')}</a>
            <a href={I18N.get('links.telegram')} target="_blank" rel="noopener noreferrer">{I18N.get('header.telegram')}</a>
            <Dropdown overlay={this.getGithubMenu()}>
              <a href="#">{I18N.get('header.github.title')}
                <DropdownIcon src={dropdown} alt="dropdown" />
              </a>
            </Dropdown>
            <Dropdown overlay={this.getLanguageMenu()}>
              <a href="#">{I18N.get('header.language.title')}
                <DropdownIcon src={dropdown} alt="dropdown" />
              </a>
            </Dropdown>
          </NavBar>
        </MediaQuery>
        <MediaQuery maxWidth={breakPoint.mobile}>
          <DrawerButton onClick={() => this.setState({ drawerVisible: true })}>
            <Icon type="menu-fold" />
          </DrawerButton>
          <Drawer
            placement="right"
            closable={false}
            onClose={() => this.setState({ drawerVisible: false })}
            visible={this.state.drawerVisible}
          >
            {this.getMobileMenu()}
          </Drawer>
        </MediaQuery>
      </Container>
    )
  }

  getGithubMenu () {
    return (
      <Menu>
        <Menu.Item>
          <MenuLink href={I18N.get('header.github.ios.url')} target="_blank" rel="noopener noreferrer">{I18N.get('header.github.ios.title')}</MenuLink>
        </Menu.Item>
        <Menu.Item>
          <MenuLink href={I18N.get('header.github.android.url')} target="_blank" rel="noopener noreferrer">{I18N.get('header.github.android.title')}</MenuLink>
        </Menu.Item>
      </Menu>
    )
  }

  getLanguageMenu () {
    return (
      <Menu>
        <Menu.Item>
          <MenuLink onClick={() => I18N.setLang('en')}>{I18N.get('header.language.en')}</MenuLink>
        </Menu.Item>
        <Menu.Item>
          <MenuLink onClick={() => I18N.setLang('zh')}>{I18N.get('header.language.zh')}</MenuLink>
        </Menu.Item>
      </Menu>
    )
  }

  getMobileMenu () {
    return (
      <Menu>
        <Menu.Item>
          <MenuLink href={I18N.get('links.elastos')} target="_blank" rel="noopener noreferrer">{I18N.get('header.elastos')}</MenuLink>
        </Menu.Item>
        <Menu.Item>
          <MenuLink href={I18N.get('links.telegram')} target="_blank" rel="noopener noreferrer">{I18N.get('header.telegram')}</MenuLink>
        </Menu.Item>
        <Menu.Item>
          <span style={{ color: colors.text.theme }}>Github:</span>
        </Menu.Item>
        <Menu.Item>
          <MenuLink href={I18N.get('header.github.android.url')} target="_blank" rel="noopener noreferrer">{I18N.get('header.github.android.title')}</MenuLink>
        </Menu.Item>
        <Menu.Item>
          <MenuLink href={I18N.get('header.github.ios.url')} target="_blank" rel="noopener noreferrer">{I18N.get('header.github.ios.title')}</MenuLink>
        </Menu.Item>
        <Menu.Item>
          &nbsp;
        </Menu.Item>
        <Menu.Item>
          <MenuLink onClick={() => I18N.setLang('en')}>{I18N.get('header.language.en')}</MenuLink>
        </Menu.Item>
        <Menu.Item>
          <MenuLink onClick={() => I18N.setLang('zh')}>{I18N.get('header.language.zh')}</MenuLink>
        </Menu.Item>
      </Menu>
    )
  }
}

const Container = styled.div`
  display: flex;
  color: white;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  z-index: 100;
`
const DrawerButton = styled.a`
  font-size: 32px;
  color: white;
  margin-right: 20px;
`
const MenuLink = styled.a`
  color: ${colors.text.theme}!important;
`

const NavBar = styled.div`
  padding-top: 24px;
  font-size: 13px;
  font-weight: 400;
  a {
    color: inherit;
    font-weight: 300;
    margin-right: 30px;
    text-transform: uppercase;
  }
`

const LogoContainer = styled.div`
  padding-left: 40px;
`
const Logo = styled.img`
  width: 148px;
  padding-top: 12px;
`
const DropdownIcon = styled.img`
  width: 15px;
  margin-left: 5px;
`
