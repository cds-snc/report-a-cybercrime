import React from 'react'
import styled from '@emotion/styled'
import { fontSize, fontWeight, lineHeight, space, color } from 'styled-system'
import tag from 'clean-tag'
import PropTypes from 'prop-types'

const BaseButtonLink = styled(tag.button)`
  font-family: ${({ theme }) => theme.fontSans};
  background: none;
  border: none;
  color: white;
  ${fontSize};
  ${fontWeight};
  ${lineHeight};
  ${color};
  ${space};
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.focusColor};
  }
`

export const ButtonLink = props => (
  <BaseButtonLink
    fontSize={[1, null, 2]}
    fontWeight="normal"
    lineHeight={[1, null, 2]}
    color="white"
    {...props}
  />
)

ButtonLink.propTypes = {
  children: PropTypes.node,
}
