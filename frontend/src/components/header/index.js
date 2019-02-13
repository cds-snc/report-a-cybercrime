import { fontSize, lineHeight, space, color, fontWeight } from 'styled-system'
import tag from 'clean-tag'
import styled from '@emotion/styled'

export const Header = styled(tag)`
  font-family: ${({ theme }) => theme.fontSans};
  margin: 0;
  ${fontSize};
  ${lineHeight};
  ${space};
  ${color};
  ${fontWeight};
`

Header.propTypes = {
  ...fontSize.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  ...fontWeight.propTypes,
}

export { H1, H2, H3, H4, H5, H6 } from './presets'
