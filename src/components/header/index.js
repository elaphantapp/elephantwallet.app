import React from 'react'
import styled, { css } from 'styled-components'

import MediaQuery from 'react-responsive'
import { Drawer, Dropdown, Menu, Icon } from 'antd'
import { breakPoint } from '../../constants/variable'

import logo from '../../../images/elephant_logo.png'
import dropdown from '../../../images/language_dropdown.png'
import arrow from '../../../images/header_arrow_right.png'

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
      <div className="header">
        <div className="logo">
          <a href="/">
            <Logo src={logo} />
          </a>
        </div>

        <MediaQuery minWidth={breakPoint.mobile}>
          <NavBar className="nav">
            <a href={I18N.get('links.elastos')} target="_blank" rel="noopener noreferrer">{I18N.get('header.elastosHome')}</a>
            <a href={I18N.get('links.telegram')} target="_blank" rel="noopener noreferrer">{I18N.get('header.telegram')}</a>
            <Dropdown overlay={this.getGithubMenu()}>
              <a href="#">{I18N.get('header.github.title')}
                <img src={dropdown} className="lan-dropdown" alt="dropdown" />
              </a>
            </Dropdown>
            <Dropdown overlay={this.getLanguageMenu()}>
              <a href="#">{I18N.get('header.language.title')}
                <img src={dropdown} className="lan-dropdown" alt="dropdown" />
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
      </div>
    )
  }

  getGithubMenu () {
    return (
      <Menu>
        <Menu.Item>
          <a href={I18N.get('header.github.ios.url')} target="_blank" rel="noopener noreferrer">{I18N.get('header.github.ios.title')}</a>
        </Menu.Item>
        <Menu.Item>
          <a href={I18N.get('header.github.android.url')} target="_blank" rel="noopener noreferrer">{I18N.get('header.github.android.title')}</a>
        </Menu.Item>
      </Menu>
    )
  }

  getLanguageMenu () {
    return (
      <Menu>
        <Menu.Item>
          <a onClick={() => I18N.setLang('en')}>{I18N.get('header.language.en')}</a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => I18N.setLang('zh')}>{I18N.get('header.language.zh')}</a>
        </Menu.Item>
      </Menu>
    )
  }

  getMobileMenu () {
    return (
      <Menu>
        <Menu.Item>
          <a href={I18N.get('links.elastos')} target="_blank" rel="noopener noreferrer">{I18N.get('header.elastosHome')}</a>
        </Menu.Item>
        <Menu.Item>
          <a href={I18N.get('links.elastos')} target="_blank" rel="noopener noreferrer">{I18N.get('header.telegram')}</a>
        </Menu.Item>
        <Menu.Item>
          &nbsp;
        </Menu.Item>
        <Menu.Item>
          <a href={I18N.get('header.github.android.url')} target="_blank" rel="noopener noreferrer">{I18N.get('header.github.android.title')}</a>
        </Menu.Item>
        <Menu.Item>
          <a href={I18N.get('header.github.ios.url')} target="_blank" rel="noopener noreferrer">{I18N.get('header.github.ios.title')}</a>
        </Menu.Item>
        <Menu.Item>
          &nbsp;
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => I18N.setLang('en')}>{I18N.get('header.language.en')}</a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => I18N.setLang('zh')}>{I18N.get('header.language.zh')}</a>
        </Menu.Item>
      </Menu>
    )
  }
}

const DrawerButton = styled.a`
  font-size: 32px;
  color: #0F2D3B;
`

const NavBar = styled.div`
  padding-top: 24px;
  font-size: 13px;
  font-weight: 400;
`

const Logo = styled.img`
  width: 148px;
  padding-top: 12px;
`

const TopLink = styled.div`
  white-space: nowrap;
`
