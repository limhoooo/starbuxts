import Image from 'next/image'
import React, { useCallback } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const BadgesContainer = styled.div`
  position: absolute;
  top: 132px;
  right: 12px;
  transition: all 0.4s;
  opacity: ${({ isBadge }) => (isBadge ? '1' : '0')};
`
const Badge = styled.div`
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 12px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`
import _ from 'lodash'
export default function Badges() {
  const [isBadge, setIsBadge] = useState(true)

  const handleScroll = useCallback(
    _.throttle(() => {
      setIsBadge(window.pageYOffset > 300 ? false : true)
    }, 300),
    [setIsBadge]
  )

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])
  return (
    <BadgesContainer isBadge={isBadge}>
      <Badge>
        <img src="/images/badge1.jpg" alt="Badge" width={130} height={230} />
      </Badge>
      <Badge>
        <img src="/images/badge2.jpg" alt="Badge" width={130} height={86} />
      </Badge>
    </BadgesContainer>
  )
}
