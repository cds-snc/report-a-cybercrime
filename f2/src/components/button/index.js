import React from 'react'
import PropTypes from 'prop-types'
import { Button as ChakraButton } from '@chakra-ui/core'

export const Button = props => (
  <ChakraButton variantColor="green" {...props}></ChakraButton>
)

Button.propTypes = {
  children: PropTypes.node,
}
