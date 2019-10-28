import styled from '@emotion/styled'
import { cleanProps } from '../../utils/cleanProps'
import {
  fontSize,
  fontWeight,
  lineHeight,
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

export const Label = styled('label', {
  shouldForwardProp: prop => cleanProps(prop),
})`
  font-family: ${({ theme }) => theme.fontSans};
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
