import React from 'react'
import styled from 'styled-components'
import { Inner } from '../UI/Inner'
import NoticeLeft from './NoticeLeft'
import NoticeRight from './NoticeRight'
import Promotion from './Promotion'
import { useState } from 'react'

const NoticeLine = styled.div`
  position: relative;
`
const NoticeBtn = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: #333;
  ${({ leftOrRight }) => {
    return leftOrRight === 'left' ? `left: 0` : `right: 0`
  }}
`
export default function Notice() {
  const [isToggle, setIsToggle] = useState(false)
  const onClickHandler = () => setIsToggle((state) => !state)

  return (
    <section>
      <NoticeLine>
        <NoticeBtn leftOrRight={'left'} />
        <NoticeBtn leftOrRight={'right'} />
        <Inner height={'62px'} display={'flex'}>
          <NoticeLeft />
          <NoticeRight isToggle={isToggle} onClickHandler={onClickHandler} />
        </Inner>
      </NoticeLine>
      <Promotion isToggle={isToggle} />
    </section>
  )
}
