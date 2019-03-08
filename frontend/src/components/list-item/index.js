import {
  fontSize,
  lineHeight,
  space,
  color,
  fontWeight,
  display,
} from 'styled-system'
import tag from 'clean-tag'
import styled from '@emotion/styled'

export const ListItem = styled(tag.li)`
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
