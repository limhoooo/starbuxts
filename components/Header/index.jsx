import React from 'react'
import { Inner } from '../Inner'
import Logo from './Logo'
import SubMenu from './SubMenu'
import styled from 'styled-components'
import MainMenu from './MainMenu'

const HeaderContainer = styled.div`
  background-color: #f6f5f0;
  border-bottom: 1px solid #c8c8c8;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 11;
`
export default function Header() {
  return (
    <HeaderContainer>
      <Inner height={'120px'}>
        <Logo />
        <SubMenu />
        <MainMenu />
      </Inner>

      {/* <div class="badges">
        <div class="badge">
          <img src="./images/badge1.jpg" alt="Badge" />
        </div>
        <div class="badge">
          <img src="./images/badge2.jpg" alt="Badge" />
        </div>
      </div> */}
    </HeaderContainer>
  )
}
