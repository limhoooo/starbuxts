import React, { useEffect, useRef } from 'react'
import { Inner } from '../UI/Inner'
import Image from 'next/image'
import { Btn } from '../UI/Btn'
import styled from 'styled-components'
import useScrollSpy from './../../hooks/useScrollSpy'

const FavoriteContainer = styled.section`
  background-image: url('../images/favorite_bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
`
const InnerBox = styled.div`
  width: 1100px;
  margin: 0 auto;
  position: relative;
  padding: 110px 0;
`
const TextGroup = styled.div`
  margin-left: 100px;
  display: flex;
  width: 362px;
  flex-wrap: wrap;
  justify-content: flex-end;
  img {
    margin-bottom: 40px;
  }
`

export default function Favorite() {
  const FavoriteRef = useRef()
  useEffect(() => {
    useScrollSpy(FavoriteRef.current)
  }, [])
  return (
    <FavoriteContainer ref={FavoriteRef}>
      <InnerBox>
        <TextGroup>
          <Image
            src="/images/favorite_text1.png"
            alt="favorite_text1"
            width={258}
            height={204}
            className="back-to-possition to-right delay-0"
          />
          <Image
            src="/images/favorite_text2.png"
            alt="favorite_text2"
            width={362}
            height={156}
            className="back-to-possition to-right delay-1"
          />
          <Btn color="#fff" className="back-to-possition to-right delay-2">
            <a>자세히 보기</a>
          </Btn>
        </TextGroup>
      </InnerBox>
    </FavoriteContainer>
  )
}
