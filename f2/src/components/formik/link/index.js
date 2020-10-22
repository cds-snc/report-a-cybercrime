import styled from '@emotion/styled'
import { fontSize } from 'styled-system'

export const A = styled.a`
  color: ${(props) => (props.color ? props.color : null)} !important;
  text-decoration: underline;
  cursor: pointer;
  ${fontSize};
`
