import {
  fontSize,
  lineHeight,
  space,
  color,
  fontWeight,
  textAlign,
} from 'styled-system'
import tag from 'clean-tag'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

export const Header = styled(tag)`
  font-family: ${({ theme }) => theme.fontSans};
  margin: 0;
  ${fontSize};
  ${lineHeight};
  ${space};
  ${color};
  ${fontWeight};
  ${textAlign};
`

Header.propTypes = {
  is: PropTypes.string.isRequired,
  ...fontSize.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
}

export { H1, H2, H3, H4, H5, H6 } from './presets'
