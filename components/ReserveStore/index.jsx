import React from 'react'
import styled from 'styled-components'
import { Inner } from '../UI/Inner'
import Image from 'next/image'
import { Btn } from '../UI/Btn'

const ReserveStoreContainer = styled.section`
  background-image: url('../images/reserve_store_bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const Medal = styled.div`
  width: 344px;
  height: 344px;
  perspective: 600px;

  & > div {
    position: absolute;
    width: 344px;
    height: 344px;
    backface-visibility: hidden;
    transition: 1s;
  }

  :hover .front {
    transform: rotateY(180deg);
  }
  :hover .back {
    transform: rotateY(0);
  }
`
const Front = styled.div`
  transform: rotateY(0);
`
const Back = styled.div`
  transform: rotateY(-180deg);
`
const BtnStore = styled(Btn)`
  position: absolute;
  top: 225px;
  left: 0;
  right: 0;
  margin: auto;
`
export default function ReserveStore() {
  return (
    <ReserveStoreContainer>
      <Inner height={'600px'}>
        <Medal>
          <Front className="front">
            <Image
              src="/images/reserve_store_medal_front.png"
              alt="reserve_store_medal_front"
              width={334}
              height={334}
            />
          </Front>
          <Back className="back">
            <Image
              src="/images/reserve_store_medal_back.png"
              alt="reserve_store_medal_back"
              width={334}
              height={334}
            />
            <BtnStore color="#D9AA8A">매장보기</BtnStore>
          </Back>
        </Medal>
      </Inner>
    </ReserveStoreContainer>
  )
}
