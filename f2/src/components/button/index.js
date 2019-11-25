import React from 'react'
import PropTypes from 'prop-types'
import { Button as ChakraButton } from '@chakra-ui/core'

export const Button = props => {
  const { variantColor } = props

  return (
    <ChakraButton
      variantColor={variantColor}
      _hover={{
        boxShadow: 'outlineHover',
      }}
      {...props}
    />
  )
}

Button.propTypes = {
  children: PropTypes.node,
}

Button.defaultProps = {
  variantColor: 'green',
}
