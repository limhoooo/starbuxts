import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'
import styled from 'styled-components'

const VideoPlayerStyled = styled(YouTube)`
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`
const VideoPlayer = () => {
  const onPlayerReady = (event) => {
    event.target.mute()
  }

  const onPlayerStateChange = (event) => {
    // event.data 값 => 1 재생 중, 2 일시중지, 0 종료 https://developers.google.com/youtube/iframe_api_reference?hl=ko#onPlaybackRateChange
    if (!event.data) {
      const player = event.target
      player.seekTo(5)
      player.playVideo()
    }
  }

  const opts = {
    playerVars: {
      autoplay: true,
      loop: true,
      playList: 'An6LvWQuj_8',
    },
  }

  return <VideoPlayerStyled videoId="An6LvWQuj_8" opts={opts} onReady={onPlayerReady} />
}

export default VideoPlayer
