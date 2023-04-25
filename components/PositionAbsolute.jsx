import styled from 'styled-components'

export const PositionAbsolute = styled.div`
  position: absolute;
  top: ${({ top }) => top || ''};
  bottom: ${({ bottom }) => bottom || ''};
  left: ${({ left }) => left || ''};
  right: ${({ right }) => right || ''};
`
