import styled from '@emotion/styled'
import {
  fontSize,
  lineHeight,
  space,
  color,
  fontWeight,
  textAlign,
} from 'styled-system'
import { cleanProps } from '../../utils/cleanProps'

export const Paragraph = styled('p', {
  shouldForwardProp: prop => cleanProps(prop),
})`
  font-family: ${({ theme }) => theme.fontSans};
  margin: 0;
  ${fontSize};
  ${lineHeight};
  ${space};
  ${color};
  ${fontWeight};
  ${textAlign};
`

Paragraph.propTypes = {
  ...fontSize.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
}

export { P, Lead } from './presets'
