import styled from '@emotion/styled'
import tag from 'clean-tag'
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
} from 'styled-system'

export const Label = styled(tag.label)`
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
`
