import React from 'react'
import { StyledDiv } from '.'
import PropTypes from 'prop-types'

export const Text = props => (
  <StyledDiv
    display="block"
    fontSize={[2, null, 3]}
    lineHeight={[2, null, 3]}
    mb={4}
    color="black"
    {...props}
  >
    {props.children}
  </StyledDiv>
)

Text.propTypes = {
  children: PropTypes.any,
}
