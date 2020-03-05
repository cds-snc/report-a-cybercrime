import React from 'react'
import PropTypes from 'prop-types'
import { Button as ChakraButton, Flex } from '@chakra-ui/core'
import canada from '../../theme/canada'

export const Button = ({ variant, variants, variantColor, ...props }) => (
  <ChakraButton
    {...canada.variants.buttons.default}
    variantColor={variantColor}
    _hover={{
      boxShadow: 'outlineHover',
    }}
    {...(variant === 'solid' &&
      variantColor !== 'gray' && {
        borderColor: canada.colors[variantColor][800],
        bg: canada.colors[variantColor][700],
        _active: {
          bg: canada.colors[variantColor][800],
        },
      })}
    {...(variant === 'solid' && {
      bg: canada.colors[variantColor][700],
      _active: {
        bg: canada.colors[variantColor][800],
      },
    })}
    {...(variantColor === 'black' && {
      color: 'white',
      bg: canada.colors.gray[700],
      borderColor: canada.colors.gray[800],
      _active: {
        bg: canada.colors.gray[800],
      },
    })}
    {...(variantColor === 'gray' && {
      bg: canada.colors[variantColor][200],
      borderColor: canada.colors[variantColor][300],
      _active: {
        bg: canada.colors[variantColor][300],
      },
    })}
    {...props}
  >
    <Flex align="center">{props.children}</Flex>
  </ChakraButton>
)

Button.propTypes = {
  children: PropTypes.node,
}

Button.defaultProps = {
  variantColor: 'green',
  variant: 'solid',
}
