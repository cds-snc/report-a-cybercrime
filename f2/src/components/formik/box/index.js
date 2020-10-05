import React from 'react'
import styled from '@emotion/styled'
import { cleanProps } from '../../../utils/cleanProps'
import { Jumbotron as BaseBox } from 'react-bootstrap'
import {
  fontSize,
  lineHeight,
  fontWeight,
  space,
  color,
  width,
  height,
  position,
} from 'styled-system'

const StyledBox = styled(BaseBox, {
  shouldForwardProp: (prop) => cleanProps(prop),
})`
  margin-top: 1rem;
  border: 1px solid rgb(174, 174, 174);
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${space}
  ${color}
  ${width}
  ${height}
  ${position}
`

export const Box = (props) => {
  return <StyledBox>{props.children}</StyledBox>
}
