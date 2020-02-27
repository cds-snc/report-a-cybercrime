import React from 'react'
import PropTypes from 'prop-types'
import { Button as ChakraButton } from '@chakra-ui/core'
import canada from '../../theme/canada'

export const Button = ({ variant, variants, variantColor, ...props }) => (
  <ChakraButton
    fontSize={{ base: 'lg', md: 'xl' }}
    fontWeight="normal"
    size="lg"
    rounded="none"
    variantColor={variantColor}
    _hover={{
      boxShadow: 'outlineHover',
    }}
    {...(variant === 'solid' &&
      variantColor !== 'gray' && {
        borderBottomColor: canada.colors[variantColor][800],
        bg: canada.colors[variantColor][700],
        _active: {
          bg: canada.colors[variantColor][800],
        },
      })}
    {...(variant === 'solid' && {
      borderBottomWidth: '3px',
      bg: canada.colors[variantColor][700],
      _active: {
        bg: canada.colors[variantColor][800],
      },
    })}
    {...(variantColor === 'black' && {
      color: 'white',
      bg: canada.colors.gray[700],
      borderBottomColor: canada.colors.gray[800],
      _active: {
        bg: canada.colors.gray[800],
      },
    })}
    {...(variantColor === 'gray' && {
      bg: canada.colors[variantColor][200],
      borderBottomColor: canada.colors[variantColor][300],
      _active: {
        bg: canada.colors[variantColor][300],
      },
    })}
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
