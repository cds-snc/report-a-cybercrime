import styled from '@emotion/styled'

export const A = styled.a`
  color: ${(props) => (props.color ? props.color : null)} !important;
  text-decoration: underline;
  cursor: pointer;
`
