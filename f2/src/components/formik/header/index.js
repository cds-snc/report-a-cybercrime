import styled from '@emotion/styled'
import { cleanProps } from '../../../utils/cleanProps'
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

export const H1 = styled('h1', {
  shouldForwardProp: (prop) => cleanProps(prop),
})`
  font-size: 3rem;
  font-weight: 700;
  ${fontSize};
  ${fontWeight};
  ${lineHeight};
  ${space};
  ${color};
  ${width};
  ${height};
  ${position};
`
export const H2 = styled('h2', {
  shouldForwardProp: (prop) => cleanProps(prop),
})`
  font-size: 1.875rem;
  font-weight: 700;
  ${fontSize};
  ${fontWeight};
  ${lineHeight};
  ${space};
  ${color};
  ${width};
  ${height};
  ${position};
`
