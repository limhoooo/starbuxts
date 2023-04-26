import styled from 'styled-components'

export const Btn = styled.div`
  width: 130px;
  padding: 10px;
  border: 2px solid;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  display: block;
  transition: 0.4s;

  color: ${({ color }) => color || '#333'};
  border-color: ${({ color }) => color || '#333'};
  :hover {
    color: #fff;
    background-color: ${({ color }) => color || '#333'};
  }
`
