import styled from '@emotion/styled'
import { fontSize } from 'styled-system'

export const A = styled.a`
  color: ${(props) => (props.color ? props.color : null)} !important;
  text-decoration: underline;
  cursor: pointer;
  &:focus {
    outline: 0px;
    box-shadow: 0 0 0 4px rgba(99, 179, 237, 0.6);
  }
  &:visited {
    color: ${(props) =>
      props.visitedColor ? props.visitedColor : '#7834bc'} !important;
  }
  ${fontSize};
`
