import React from 'react'
import styled from 'styled-components'
import { SvgIcon } from '@mui/material'
import UploadIcon from '@mui/icons-material/Upload'
const NoticeRightContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  h2 {
    font-size: 17px;
    font-weight: 700;
  }
`
const TogglePromotion = styled.div`
  cursor: pointer;
  display: flex;
  transition: transform 0.4s;
  margin-left: 10px;
  transform: ${({ isToggle }) =>
    isToggle ? 'rotate(180deg)' : 'rotate(0deg)'};
`
export default function NoticeRight({ isToggle, onClickHandler }) {
  return (
    <NoticeRightContainer>
      <h2>스타벅스 프로모션</h2>
      <TogglePromotion onClick={onClickHandler} isToggle={isToggle}>
        <SvgIcon component={UploadIcon} inheritViewBox />
      </TogglePromotion>
    </NoticeRightContainer>
  )
}
