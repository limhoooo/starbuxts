import React from 'react'
import styled from 'styled-components'
import { Btn } from '../UI/Btn'

const RewardsContainer = styled.section`
  position: relative;
`
const BgContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor || '#fff'};
  position: absolute;
  top: 0;
  left: ${({ left }) => left || ''};
  right: ${({ right }) => right || ''};
`
const InnerContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
  position: relative;
  background-image: url('../images/rewards.jpg');
  height: 241px;
`
const BtnGroup = styled.div`
  position: absolute;
  width: 250px;
  bottom: 24px;
  right: 0;
  display: flex;
  flex-wrap: wrap;

  .sign-up {
    margin-right: 10px;
    background-color: #333;
    color: #fff;
    :hover {
      background: none;
      color: #333;
    }
  }
  .sign-in {
    width: 110px;
  }
  .gift {
    margin-top: 10px;
    flex-grow: 1;
  }
`
export default function Rewards() {
  return (
    <RewardsContainer>
      <BgContainer left={'0'} backgroundColor={'#272727'} />
      <BgContainer right={'0'} backgroundColor={'#d5c798'} />
      <InnerContainer>
        <BtnGroup>
          <Btn backgroundColor={'#333'} className="sign-up">
            회원가입
          </Btn>
          <Btn className="sign-in">로그인</Btn>
          <Btn className="gift">e-Gift 선물하기</Btn>
        </BtnGroup>
      </InnerContainer>
    </RewardsContainer>
  )
}
