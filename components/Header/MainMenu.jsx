import React from 'react'
import { Inner } from '../UI/Inner'
import styled from 'styled-components'

const MainMenuContainer = styled.ul`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  display: flex;
  margin: 0;
`
const MainMenuLi = styled.li`
  :hover {
    background-color: #2c2a29;
    color: #669900;
    border-radius: 6px 6px 0 0;
  }
`

const ItemName = styled.div`
  padding: 10px 20px 34px 20px;
  font-family: Arial, sans-serif;
  font-size: 13px;

  :hover ~ div {
    display: block;
  }
`
const ItemContents = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  display: none;
  :hover {
    display: block;
  }
`
const ContentsMenu = styled.div`
  background-color: #2c2a29;
`
const ContentsMenuBox = styled.ul`
  width: 1100px;
  margin: 0 auto;
  position: relative;
  display: flex;
  padding: 20px 0;
  li {
    width: 220px;
    h4 {
      font-size: 14px;
      color: #fff;
      margin: 0;
    }
    ul {
      padding: 0;
      li {
        padding: 5px 0;
        font-size: 12px;
        color: #999;
        cursor: pointer;

        :hover {
          color: #669900;
        }
      }
    }
  }
`
const ContentsTexture = styled.div`
  padding: 26px 0;
  font-size: 12px;
  background-image: url('/images/main_menu_pattern.jpg');
  h4 {
    color: #999;
    font-weight: 700;
    margin: 0;
  }
  p {
    color: #669900;
    margin: 4px 0 14px;
    font-size: 12px;
  }
`
export default function MainMenu({ headerInfo }) {
  return (
    <MainMenuContainer>
      {headerInfo.map((item, index) => (
        <MainMenuLi key={index}>
          <ItemName>{item.headerMenu}</ItemName>
          {/* 컴포넌트 분리예정 */}
          <ItemContents>
            <ContentsMenu>
              <ContentsMenuBox>
                {item.contents.map((contens, contensIndex) => (
                  <li key={contensIndex}>
                    {
                      <>
                        <h4>{contens.title}</h4>
                        <ul>
                          {contens.menu.map((menu, menuIndex) => (
                            <li key={menuIndex}>{menu.menuName}</li>
                          ))}
                        </ul>
                      </>
                    }
                  </li>
                ))}
              </ContentsMenuBox>
            </ContentsMenu>
            <ContentsTexture>
              <Inner>
                {item.subContents.map((item, index) => (
                  <span key={index}>
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                  </span>
                ))}
              </Inner>
            </ContentsTexture>
          </ItemContents>
        </MainMenuLi>
      ))}
    </MainMenuContainer>
  )
}
