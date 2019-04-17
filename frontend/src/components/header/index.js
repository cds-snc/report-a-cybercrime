import {
  fontSize,
  lineHeight,
  space,
  color,
  fontWeight,
  textAlign,
} from 'styled-system'
import { cleanProps } from '../../utils/cleanProps'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

export const Header = styled('span', {
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

Header.propTypes = {
  as: PropTypes.string.isRequired,
  ...fontSize.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
}

export { H1, H2, H3, H4, H5, H6 } from './presets'
