import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Inner } from '../UI/Inner'
import VideoPlayer from './VideoPlayer'
import useFloating from '../../hooks/useFloating'

const YoutubeContainer = styled.section`
  position: relative;
  height: 700px;
  background: #333;
  overflow: hidden;
`
const YoutubeArea = styled.div`
  width: 1920px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: calc(1920px * 9 / 16 / -2);
  margin-left: calc(1920px / -2);

  ::before {
    content: '';
    display: block;
    width: 100%;
    height: 0;
    padding-top: 56.25%;
  }
`
const YoutubeCover = styled.div`
  background-image: url('../images/video_cover_pattern.png');
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
const Floating = styled.div`
  position: absolute;
  top: ${({ top }) => `${top}px` || '0px'};
  left: ${({ left }) => `${left}px` || '0px'};
`
export default function YoutubeComponent() {
  const floatingRef1 = useRef(null)
  const floatingRef2 = useRef(null)
  useFloating(floatingRef1, 3, 15)
  useFloating(floatingRef2, 0.5, 15)
  return (
    <YoutubeContainer>
      <YoutubeArea>
        <VideoPlayer />
      </YoutubeArea>
      <YoutubeCover />
      <Inner height={700}>
        <Floating top={50}>
          <img
            src="/images/floating1.png"
            alt="floating1"
            width={285}
            height={285}
            ref={floatingRef1}
          />
        </Floating>
        <Floating top={350} left={150}>
          <img
            src="/images/floating2.png"
            alt="floating2"
            width={216}
            height={216}
            ref={floatingRef2}
          />
        </Floating>
      </Inner>
    </YoutubeContainer>
  )
}
