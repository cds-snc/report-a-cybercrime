import styled from '@emotion/styled'
import { cleanProps } from '../../../utils/cleanProps'
import {
  fontSize,
  lineHeight,
  fontFamily,
  fontWeight,
  space,
  color,
  colorStyle,
  display,
  border,
  borderColor,
  width,
  height,
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
} from 'styled-system'

export const P = styled('p', {
  shouldForwardProp: (prop) => cleanProps(prop),
})`
  font-family: ${fontFamily};
  ${fontSize};
  ${fontWeight};
  ${lineHeight};
  ${space};
  ${color};
  ${colorStyle};
  ${display};
  ${border};
  ${borderColor};
  ${width};
  ${height};
  ${position};
  ${zIndex};
  ${top};
  ${right};
  ${bottom};
  ${left};
`
//This component can be used to render hidden text to be used by a screen reader.
export const HiddenText = styled.p`
  opacity: 0;
  height: 0rem;
`
