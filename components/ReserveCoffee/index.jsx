import React from 'react'
import styled from 'styled-components'
import { Inner } from '../UI/Inner'
import Image from 'next/image'
import { Btn } from '../UI/Btn'

const ReserveCoffeeContainer = styled.section`
  background-image: url('../images/reserve_bg.jpg');
`
const ReserveLog = styled.div`
  position: absolute;
  top: 110px;
  left: 0;
`
const TextGroup = styled.div`
  position: absolute;
  top: 124px;
  left: 208px;
`
const Product = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`
export default function ReserveCoffee() {
  return (
    <ReserveCoffeeContainer>
      <Inner height={'400px'}>
        <ReserveLog>
          <Image
            src="/images/reserve_logo.png"
            alt="reserve_logo"
            width={152}
            height={186}
          />
        </ReserveLog>
        <TextGroup>
          <Image
            src="/images/reserve_text.png"
            alt="reserve_text"
            width={450}
            height={120}
          />
          <Btn color="#D9AA8A">
            <a>자세히 보기</a>
          </Btn>
        </TextGroup>
        <Product>
          <Image
            src="/images/reserve_image.png"
            alt="reserve_image"
            width={444}
            height={420}
          />
        </Product>
      </Inner>
    </ReserveCoffeeContainer>
  )
}
