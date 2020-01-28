import React from 'react'
import PropTypes from 'prop-types'
import { Button as ChakraButton, Box } from '@chakra-ui/core'

export const Button = ({ variant, variants, variantColor, ...props }) => (
  <Box>
    <ChakraButton
      fontSize={{ base: 'lg', md: 'xl' }}
      fontWeight="normal"
      size="lg"
      rounded="none"
      variantColor={variantColor}
      {...(variant === 'solid'
        ? {
            borderBottomWidth: '3px',
            borderBottomColor: `${variantColor}.800`,
            bg: `${variantColor}.600`,
          }
        : '')}
      _hover={{
        boxShadow: 'outlineHover',
      }}
      {...props}
    />
  </Box>
)

Button.propTypes = {
  children: PropTypes.node,
}

Button.defaultProps = {
  variantColor: 'green',
  variant: 'solid',
}
