import styled from '@emotion/styled'
import { color } from 'styled-system'

export const A = styled.a`
  color: ${(props) => (props.color ? props.color : color)} !important;
  text-decoration: underline;
  cursor: pointer;
`
