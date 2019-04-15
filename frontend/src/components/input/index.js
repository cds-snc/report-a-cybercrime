import styled from '@emotion/styled'
import { cleanProps } from '../../utils/cleanProps'
import {
  height,
  width,
  space,
  borders,
  borderColor,
  display,
  position,
  top,
  right,
  bottom,
  left,
  zIndex,
} from 'styled-system'

export const Input = styled('input', {
  shouldForwardProp: prop => cleanProps(prop),
})`
  ${height};
  ${width};
  ${space};
  ${borders};
  ${borderColor};
  ${display};
  ${position};
  ${top};
  ${right};
  ${bottom};
  ${left};
  ${zIndex};
`
