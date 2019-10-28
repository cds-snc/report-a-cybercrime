import {
  fontSize,
  lineHeight,
  space,
  color,
  fontWeight,
  display,
} from 'styled-system'
import { cleanProps } from '../../utils/cleanProps'
import styled from '@emotion/styled'

export const ListItem = styled('li', {
  shouldForwardProp: prop => cleanProps(prop),
})`
  font-family: ${({ theme }) => theme.fontSans};
  margin: 0;
  ${fontSize};
  ${lineHeight};
  ${space};
  ${color};
  ${fontWeight};
  ${display};
`

ListItem.propTypes = {
  ...fontSize.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  ...fontWeight.propTypes,
  ...display.propTypes,
}

export { Li } from './presets'
