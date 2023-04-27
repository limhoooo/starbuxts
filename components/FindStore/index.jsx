import Image from 'next/image'
import React from 'react'
import { Btn } from '../UI/Btn'
import styled from 'styled-components'
import { Inner } from '../UI/Inner'
const FindStoreContainer = styled.section`
  background-image: url('../images/find_store_bg.jpg');

  .texture1 {
    position: absolute;
    top: 0;
    left: 400px;
  }
  .texture2 {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .picture {
    border-radius: 50%;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    position: absolute;
  }
  .picture1 {
    top: -60px;
    left: 0;
  }
  .picture2 {
    top: 150px;
    left: 250px;
  }
`
const TextGroup = styled.div`
  position: absolute;
  top: 120px;
  left: 550px;

  img {
    margin-bottom: 20px;
  }
`

export default function FindStore() {
  return (
    <FindStoreContainer>
      <Inner height={'400px'}>
        <Image
          src="/images/find_store_texture1.png"
          alt="find_store_texture1"
          className="texture1"
          width={343}
          height={92}
        />
        <Image
          src="/images/find_store_texture2.png"
          alt="find_store_texture2"
          className="texture2"
          width={230}
          height={102}
        />
        <Image
          src="/images/find_store_picture1.jpg"
          alt="find_store_texture3"
          className="picture picture1"
          width={350}
          height={350}
        />
        <Image
          src="/images/find_store_picture2.jpg"
          alt="find_store_texture4"
          className="picture picture2"
          width={216}
          height={216}
        />

        <TextGroup>
          <Image
            src="/images/find_store_text1.png"
            alt="find_store_text1"
            width={385}
            height={54}
          />
          <Image
            src="/images/find_store_text2.png"
            alt="find_store_text2"
            width={366}
            height={61}
          />
          <Btn>
            <a>매장찾기</a>
          </Btn>
        </TextGroup>
      </Inner>
    </FindStoreContainer>
  )
}
