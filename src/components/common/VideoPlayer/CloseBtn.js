import React from 'react'
import styled from 'styled-components'

export default class extends React.Component {
  render () {
    return (
      <Container onClick={this.props.onClick}>
        <div className="close-btn-bg">
          <div />
        </div>
        <div className="close-icon">
          <div className="close-line top" />
          <div className="close-line bot" />
        </div>
      </Container>
    )
  }
}

const Container = styled.div`
  width: 72px;
  height: 72px;
  transform: rotate(45deg);
  position: absolute;
  left: -36px;
  top: 50%;
  margin-top: -36px;
  z-index: 3;
  overflow: hidden;
  background-color: #0e2d39;
  box-shadow: 15px 14px 103px 0px rgba(47, 73, 100, 0.8);
  cursor: pointer;
  .close-btn-bg {
    position: absolute;
    left: -20%;
    top: -20%;
    transform: scaleX(-1) rotate(45deg);
    width: 102px;
    height: 102px;
    > div {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: #2a3c57;
      transform: translateY(-50%);
      transition: transform .5s ease-out;
    }
  }
  @media screen and (max-width: 1024px) {
    transform: rotate(45deg) scale(.6);
  }
  @media screen and (max-width: 550px) {
    transform: rotate(45deg) scale(0.4);
  }
  :hover > .close-btn-bg div {
    transform: translateY(0%);
  }
  .close-line {
    width: 23px;
    height: 4px;
    border-radius: 20px;
    background-color: #fff;
    position: absolute;
    left: 24px;
    top: 50%;
    margin-top: -2px;
    &.top {
      transform: translate3d(0px, 0px, 0);
    }
    &.bot {
      transform: rotate(90deg) translate3d(0px, 0px, 0);
    }
  }
`
