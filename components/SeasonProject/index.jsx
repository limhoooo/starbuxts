import React from 'react'
import styled from 'styled-components'
import { Inner } from '../UI/Inner'
import Image from 'next/image'
import { Btn } from '../UI/Btn'
import _ from 'lodash'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useCallback } from 'react'
import useFloating from '../../hooks/useFloating'

const SeasonProduct = styled.section`
  background-image: url('../images/season_product_bg.jpg');
`
const Floating = styled.div`
  position: absolute;
  top: ${({ top }) => `${top}px` || '0px'};
  right: ${({ right }) => `${right}px` || '0px'};
`
const TextGroup = styled.div`
  position: absolute;
  top: 110px;
  right: 100px;
`
const Event1 = styled.div`
  transition: all 1s;
  opacity: ${({ isEvent }) => (isEvent ? '1' : '0')};
  transform: ${({ isEvent }) =>
    isEvent ? 'translateX(0px)' : 'translateX(-150px)'};
`
const Event2 = styled.div`
  transition: all 1s;
  opacity: ${({ isEvent }) => (isEvent ? '1' : '0')};
  transform: ${({ isEvent }) =>
    isEvent ? 'translateX(0px)' : 'translateX(150px)'};
`
const Event3 = styled.div`
  transition: all 1s;
  opacity: ${({ isEvent }) => (isEvent ? '1' : '0')};
  transform: ${({ isEvent }) =>
    isEvent ? 'translateX(0px)' : 'translateX(150px)'};
`
const Event4 = styled.div`
  transition: all 1s;
  opacity: ${({ isEvent }) => (isEvent ? '1' : '0')};
  transform: ${({ isEvent }) =>
    isEvent ? 'translateX(0px)' : 'translateX(150px)'};
`
export default function SeasonProject() {
  const seasonProductRef = useRef(null)
  const floatingRef3 = useRef(null)
  const [isEvent1, setIsEvent1] = useState(false)
  const [isEvent2, setIsEvent2] = useState(false)
  const [isEvent3, setIsEvent3] = useState(false)
  const [isEvent4, setIsEvent4] = useState(false)

  useFloating(floatingRef3, 1.5, 30)

  const handleScroll = useCallback(
    _.throttle(() => {
      const seasonProductOffsetTop = seasonProductRef.current.offsetTop
      const Flag =
        window.pageYOffset > seasonProductOffsetTop - 800 ||
        window.pageYOffset > seasonProductOffsetTop + 800
          ? true
          : false
      delayFnc(setIsEvent1, Flag, 100)
      delayFnc(setIsEvent2, Flag, 400)
      delayFnc(setIsEvent3, Flag, 700)
      delayFnc(setIsEvent4, Flag, 1000)
    }, 300),
    []
  )
  const delayFnc = (fnc, flag, timeout) => {
    setTimeout(() => {
      fnc(flag)
    }, timeout)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <SeasonProduct ref={seasonProductRef}>
      <Inner height={'400px'}>
        <Floating top={-200} right={0}>
          <img
            src="/images/floating3.png"
            alt="floating3"
            width={321}
            height={324}
            ref={floatingRef3}
          />
        </Floating>
        <Event1 isEvent={isEvent1}>
          <img
            src="/images/season_product_image.png"
            alt="season_product_image"
            width={493}
            height={499}
          />
        </Event1>

        <TextGroup>
          <Event2 isEvent={isEvent2}>
            <img
              src="/images/season_product_text1.png"
              alt="title1"
              width={262}
              height={57}
            />
          </Event2>
          <Event3 isEvent={isEvent3}>
            <img
              src="/images/season_product_text2.png"
              alt="dec"
              width={488}
              height={57}
            />
          </Event3>
          <Event4 isEvent={isEvent4}>
            <Btn>
              <a>자세히 보기</a>
            </Btn>
          </Event4>
        </TextGroup>
      </Inner>
    </SeasonProduct>
  )
}
