import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import tag from 'clean-tag'
import theme from '../../theme'
import { fontSize, fontWeight, lineHeight, space, color } from 'styled-system'

export const StyledLabel = styled(tag.span)`
  font-family: ${theme.fontSans};
  margin: 0;
  text-transform: none;
  cursor: pointer;
  padding: 8px 0px 9px 8px;
  display: block;
  height: 28px;
  color: ${theme.colors.black};
  ::before {
    content: '';
    display: block;
    border: 2px solid ${theme.colors.black};
    background: transparent;
    width: ${({ fontSize }) => fontSize};
    height: ${({ fontSize }) => fontSize};
    position: absolute;
    top: 0;
    left: 0;
  }
  ::after {
    content: '';
    border: solid;
    color: ${theme.colors.black};
    border-width: 0 0 4px 4px;
    background: transparent;
    border-top-color: transparent;
    width: ${({ checkscale }) => 11 * checkscale}px;
    height: ${({ checkscale }) => 5 * checkscale}px;
    position: absolute;
    top: 8px;
    left: 6px;
    transform: rotate(-45deg);
    zoom: 1;
    opacity: 0;
  }
  ${fontSize};
  ${fontWeight};
  ${lineHeight};
  ${space};
  ${color};
`

StyledLabel.propTypes = {
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  checkscale: PropTypes.string,
}
