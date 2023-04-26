import styled from 'styled-components'

export const Inner = styled.div`
  width: 1100px;
  height: ${({ height }) => height || 'auto'};
  margin: 0 auto;
  position: relative;
  display: ${({ display }) => display || 'block'};
`
