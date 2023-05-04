import React from 'react'
import styled from 'styled-components'
import { Inner } from '../UI/Inner'
import { Btn } from '../UI/Btn'
import Image from 'next/image'

const FooterContainer = styled.footer`
  background-color: #272727;
  border-top: 1px solid #333;

  & > div {
    padding: 40px 0 60px 0;
  }
`
const Menu = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  li {
    position: relative;
  }
  li::before {
    content: '';
    width: 3px;
    height: 3px;
    background-color: #555;
    position: absolute;
    top: 0;
    bottom: 0;
    right: -1px;
    margin: auto;
  }
  li:last-child::before {
    display: none;
  }
  li a {
    display: block;
    color: #ccc;
    font-size: 12px;
    font-weight: 700;
    padding: 15px;
  }
  li a.green {
    color: #669900;
  }
`

const BtnGroup = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;

  & > div {
    font-size: 12px;
    margin-right: 10px;
  }
  & > div:last-child {
    margin-right: 0;
  }
`

const Copyright = styled.p`
  color: #999;
  text-align: center;
  margin-top: 20px;
  a {
    color: #999;
    font-size: 12px;
  }
`
const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`
export default function Footer() {
  return (
    <FooterContainer>
      <Inner>
        <Menu>
          <li>
            <a href="javscript:void(0)">개인정보처리방침</a>
          </li>
          <li>
            <a href="javscript:void(0)">영상정보처리기기 운영관리 방침</a>
          </li>
          <li>
            <a href="javscript:void(0)">홈페이지 이용약관</a>
          </li>
          <li>
            <a href="javscript:void(0)">위치정보 이용약관</a>
          </li>
          <li>
            <a href="javscript:void(0)">스타벅스 카드 이용약관</a>
          </li>
          <li>
            <a href="javscript:void(0)">윤리경영 핫라인</a>
          </li>
        </Menu>
        <BtnGroup>
          <Btn color="#fff">
            <a>찾아오시는 길</a>
          </Btn>
          <Btn color="#fff">
            <a>신규입점제의</a>
          </Btn>
          <Btn color="#fff">
            <a>사이트맵</a>
          </Btn>
        </BtnGroup>
        <Copyright>
          &copy; &nbsp;
          <a href="https://github.com/limhoooo" target="_blank">
            https://github.com/limhoooo
          </a>
        </Copyright>
        <Logo>
          <Image
            src="/images/starbucks_logo_only_text.png"
            alt="STAR BUCKS"
            width={142}
            height={14}
          />
        </Logo>
      </Inner>
    </FooterContainer>
  )
}
