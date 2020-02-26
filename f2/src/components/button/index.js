import React from 'react'
import PropTypes from 'prop-types'
import { Button as ChakraButton } from '@chakra-ui/core'

export const Button = ({ variant, variants, variantColor, ...props }) => (
  <ChakraButton
    as="a"
    role="button"
    fontSize={{ base: 'lg', md: 'xl' }}
    fontWeight="normal"
    size="lg"
    rounded="none"
    variantColor={variantColor}
    {...(variant === 'solid'
      ? {
          borderBottomWidth: '3px',
          borderBottomColor: `${variantColor}.800`,
          bg: `${variantColor}.700`,
        }
      : '')}
    _hover={{
      boxShadow: 'outlineHover',
    }}
    _active={{
      bg: `${variantColor}.800`,
    }}
    {...props}
  />
)

Button.propTypes = {
  children: PropTypes.node,
}

Button.defaultProps = {
  variantColor: 'green',
  variant: 'solid',
}
