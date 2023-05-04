import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
const LogoContainer = styled.a.attrs({
  href: '/',
})`
  height: 75px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`
export default function Logo() {
  return (
    <LogoContainer href="/">
      <img
        src="/images/starbucks_logo.png"
        width={75}
        height={75}
        alt="SARTBUCKS"
      />
    </LogoContainer>
  )
}
