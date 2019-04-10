import styled from '@emotion/styled'
import tag from 'clean-tag'
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

export const Label = styled(tag.label)`
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
