import React from 'react'
import { StyledSpan } from '.'
import PropTypes from 'prop-types'

export const Text = props => (
  <StyledSpan
    display="block"
    fontSize={[2, null, 3]}
    lineHeight={[2, null, 3]}
    color="black"
    {...props}
  >
    {props.children}
  </StyledSpan>
)

Text.propTypes = {
  children: PropTypes.any,
}
