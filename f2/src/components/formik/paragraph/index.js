import React from 'react'
import styled from '@emotion/styled'
import { cleanProps } from '../../../utils/cleanProps'
import {
  typography,
  space,
  layout,
  border,
  position,
  color,
} from 'styled-system'

export const P = styled('p', {
  shouldForwardProp: (prop) => cleanProps(prop),
})`
  ${typography}
  ${space}
  ${layout}
  ${border}
  ${position}
  ${color}
`

export const ErrorText = (props) => {
  return (
    <P color="#dc3545" fontSize="1.25rem" marginBottom="0.5rem">
      {props.children}
    </P>
  )
}
//This component can be used to render hidden text to be used by a screen reader.
export const HiddenText = styled.p`
  opacity: 0;
  height: 0rem;
`
