import React from 'react'
import videojs from 'video.js'
import styled from 'styled-components'
import TitleWithLine from '../../common/TitleWithLine'
import CloseBtn from './CloseBtn'
import closeImg from '../../../../images/btn_close_purp.png'

import 'video.js/dist/video-js.css'
import './style.less'

export default class VideoPlayer extends React.Component {
  componentDidMount () {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, function onPlayerReady () {
      // console.log('onPlayerReady', this)
    })
  }

  // destroy player on unmount
  componentWillUnmount () {
    if (this.player) {
      this.player.dispose()
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render () {
    return (
      <Container>
        <TitleWithLine label="WELCOME TO THE FUTURE" titleColor="white" style={{ alignSelf: 'flex-start', marginBottom: 30 }} />
        <CloseBtn src={closeImg} onClick={this.onClose} />

        <div data-vjs-player className="elastos-video-container" style={{ position: 'relative', width: '100%', height: 'calc(100% * 1080/1920 + 6%)' }}>
          <video ref={ node => this.videoNode = node } className="video-js"></video>
        </div>
      </Container>
    )
  }
  onClose = () => {
    this.player.pause()
    this.props.onClose()
  }
}


const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1024px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
