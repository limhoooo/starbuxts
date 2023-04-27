import React from 'react'
import styled from 'styled-components'
import { Inner } from '../UI/Inner'

const AwardsContainer = styled.div`
  background-color: #272727;

  & > div {
    padding: 40px 0;
  }
`

export default function Awards() {
  return (
    <AwardsContainer>
      <Inner />
    </AwardsContainer>
  )
}
