import styled from '@emotion/styled'
import {
  fontSize,
  fontWeight,
  lineHeight,
  space,
  color,
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
  textAlign,
} from 'styled-system'
import tag from 'clean-tag'

export const StyledSpan = styled(tag.span)`
  font-family: ${({ theme }) => theme.fontSans};
  margin: 0;
  ${fontSize};
  ${fontWeight};
  ${lineHeight};
  ${space};
  ${color};
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
  ${textAlign}
`
export { Text } from './presets'
