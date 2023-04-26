import React from 'react'
import { Inner } from '../UI/Inner'
import Logo from './Logo'
import SubMenu from './SubMenu'
import styled from 'styled-components'
import MainMenu from './MainMenu'
import Badges from './Badges'

const HeaderContainer = styled.div`
  background-color: #f6f5f0;
  border-bottom: 1px solid #c8c8c8;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 11;
`
export default function Header({ headerInfo }) {
  return (
    <HeaderContainer>
      <Inner height={'120px'}>
        <Logo />
        <SubMenu />
        <MainMenu headerInfo={headerInfo} />
      </Inner>
      <Badges />
    </HeaderContainer>
  )
}
