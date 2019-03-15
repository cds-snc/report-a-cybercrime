import styled from '@emotion/styled'
import tag from 'clean-tag'
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

export const Input = styled(tag.input)`
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
