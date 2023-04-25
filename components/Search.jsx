import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const SearchContainer = styled.div`
  height: 34px;
  position: relative;
`
const SearchInput = styled.input.attrs({
  type: 'text',
})`
  //width: ${(props) => (props.isClick ? '120px' : '36px')};
  width: 36px;
  height: 34px;
  padding: 4px 10px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
  background-color: #fff;
  color: #777;
  font-size: 12px;
  transition: all 0.4s;
  ${({ isClick }) => {
    return isClick ? `width: 140px` : null
  }}
`
const SearchIcon = styled.label.attrs({
  htmlFor: 'searchInput',
})`
  height: 24px;
  position: absolute;
  right: 8px;
  bottom: 2px;
  margin: auto;
  transition: 0.4s;
  opacity: ${(props) => (props.isClick ? '0' : '1')};
  cursor: pointer;
`
export default function Search() {
  const [isClick, setIsClick] = useState(false)
  const isClickShow = () => {
    setIsClick(true)
  }
  const isClickHide = () => {
    setIsClick(false)
  }
  return (
    <SearchContainer>
      <SearchInput
        isClick={isClick}
        onClick={isClickShow}
        onBlur={isClickHide}
        id="searchInput"
      />
      <SearchIcon onClick={isClickShow} isClick={isClick}>
        <Image
          priority
          src="/images/search-icon.png"
          width={18}
          height={18}
          alt="searchIcon"
        />
      </SearchIcon>
    </SearchContainer>
  )
}
