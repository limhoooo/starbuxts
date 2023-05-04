import React, { useRef } from 'react'
import styled from 'styled-components'
import { Inner } from '../UI/Inner'
import { Btn } from '../UI/Btn'
import Image from 'next/image'
import { useEffect } from 'react'
import gsap from 'gsap'
import { PositionAbsolute } from '../UI/PositionAbsolute'

const VisualContainer = styled.section`
  margin-top: 120px;
  background-image: url('/images/visual_bg.jpg');
  background-position: center;
`
const FideIn = styled.div`
  opacity: 0;
`

export default function Visual() {
  const visualTitle = useRef()
  const visualCup1 = useRef()
  const visualCup2 = useRef()
  const visualCup3 = useRef()
  useEffect(() => {
    // gsap.to(요소,지속시간,옵션)
    gsap.to(visualTitle.current, 1, { opacity: 1, delay: 0.5 })
    gsap.to(visualCup1.current, 1, { opacity: 1, delay: 1 })
    gsap.to(visualCup2.current, 1, { opacity: 1, delay: 1.5 })
    gsap.to(visualCup3.current, 1, { opacity: 1, delay: 2 })
  }, [])
  return (
    <VisualContainer>
      <Inner height={'646px'}>
        <FideIn ref={visualTitle}>
          <PositionAbsolute top={'88px'} left={'-10px'}>
            <Image
              src="/images/visual_title.png"
              alt="STARBUCKS DELIGFTFUL START TO THE YEAR"
              width={470}
              height={231}
            />
            <PositionAbsolute top={'259px'} left={'173px'}>
              <Btn color={'#592B18'}>
                <a>자세히 보기</a>
              </Btn>
            </PositionAbsolute>
          </PositionAbsolute>
        </FideIn>

        <FideIn ref={visualCup1}>
          <PositionAbsolute bottom={'0'} right={'-47px'}>
            <Image
              src="/images/visual_cup1.png"
              alt="오트밀 라떼"
              width={279}
              height={576}
            />
          </PositionAbsolute>
          <PositionAbsolute top={'38px'} right={'171px'}>
            <Image
              src="/images/visual_cup1_text.png"
              alt="오트밀 라떼"
              width={179}
              height={76}
            />
          </PositionAbsolute>
        </FideIn>
        <FideIn ref={visualCup2}>
          <PositionAbsolute bottom={'0'} right={'162px'}>
            <Image
              src="/images/visual_cup2.png"
              alt="카라멜모카"
              width={280}
              height={504}
            />
          </PositionAbsolute>
        </FideIn>
        <FideIn ref={visualCup3}>
          <PositionAbsolute top={'321px'} right={'416px'}>
            <Image
              src="/images/visual_cup2_text.png"
              alt="카라멜모카"
              width={254}
              height={96}
            />
          </PositionAbsolute>
          <PositionAbsolute bottom={'0'} left={'275px'}>
            <Image
              src="/images/visual_spoon.png"
              alt="spoon"
              width={413}
              height={218}
            />
          </PositionAbsolute>
        </FideIn>
      </Inner>
    </VisualContainer>
  )
}
