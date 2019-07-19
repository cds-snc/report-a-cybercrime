import React from 'react'
import styled from '@emotion/styled'
import {
  fontSize,
  fontWeight,
  lineHeight,
  space,
  colorStyle,
  color,
} from 'styled-system'
import { cleanProps } from '../../utils/cleanProps'
import PropTypes from 'prop-types'

const BaseButton = styled('button', {
  shouldForwardProp: prop => cleanProps(prop),
})`
  font-family: ${({ theme }) => theme.fontBold};
  margin: 0;
  border: 0;
  ${fontSize};
  ${fontWeight};
  ${lineHeight};
  ${colorStyle};
  ${color};
  ${space};
`

export const Button = props => (
  <BaseButton
    fontSize={[2, null, 3]}
    fontWeight="normal"
    lineHeight={[2, null, 3]}
    colors="button"
    marginTop={[2, null, 3]}
    py={1}
    px={[2, null, 3]}
    {...props}
  />
)

Button.propTypes = {
  children: PropTypes.node,
}
