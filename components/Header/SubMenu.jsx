import React from 'react'
import styled from 'styled-components'
import Search from './Search'
const SubMenuContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  display: flex;

  ul {
    font-family: Arial, sans-serif;
    display: flex;
    margin: 0;
    li {
      position: relative;

      &::before {
        content: '';
        width: 1px;
        height: 12px;
        background-color: #e5e5e5;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
      }

      &:first-child::before {
        display: none;
      }

      a {
        display: block;
        font-size: 12px;
        padding: 11px 16px;
        color: #656565;

        &:hover {
          color: #000;
        }
      }
    }
  }
`
export default function SubMenu() {
  return (
    <SubMenuContainer>
      <ul>
        <li>
          <a href="/">Sign In</a>
        </li>
        <li>
          <a href="/">My Starbucks</a>
        </li>
        <li>
          <a href="/">Customer Service & Ideas</a>
        </li>
        <li>
          <a href="/">Find a Store</a>
        </li>
      </ul>
      <Search />
    </SubMenuContainer>
  )
}
