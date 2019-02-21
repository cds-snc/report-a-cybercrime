import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import tag from 'clean-tag'
import theme from '../../theme'
import { fontSize, fontWeight, lineHeight, space, color } from 'styled-system'

const BaseStyledLabel = styled(tag.span)`
  font-family: ${({ theme }) => theme.fontSans};
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
    border: 2px solid ${({ theme }) => theme.colors.black};
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
    color: ${({ theme }) => theme.colors.black};
    border-width: 0 0 4px 4px;
    background: transparent;
    border-top-color: transparent;
    width: ${({ checkScale }) => 11 * checkScale}px;
    height: ${({ checkScale }) => 5 * checkScale}px;
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

BaseStyledLabel.propTypes = {
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  checkScale: PropTypes.string,
}

export const StyledLabel = props => (
  <BaseStyledLabel
    fontWeight="400"
    fontSize="24px"
    lineHeight="16px"
    checkScale="1"
    {...props}
  >
    {props.children}
  </BaseStyledLabel>
)

StyledLabel.propTypes = {
  children: PropTypes.any,
}
