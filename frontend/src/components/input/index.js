import styled from '@emotion/styled'
import { cleanProps } from '../../utils/cleanProps'
import {
  fontSize,
  fontWeight,
  height,
  width,
  color,
  colorStyle,
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
  ${fontSize};
  ${fontWeight};
  ${height};
  ${width};
  ${space};
  ${borders};
  ${borderColor};
  ${display};
  ${position};
  ${colorStyle};
  ${color};
  ${top};
  ${right};
  ${bottom};
  ${left};
  ${zIndex};
`
