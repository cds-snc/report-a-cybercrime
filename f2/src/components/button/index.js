import React from 'react'
import PropTypes from 'prop-types'
import { Button as ChakraButton } from '@chakra-ui/core'
import canada from '../../theme/canada'
import { addBlack } from '@chakra-ui/core/dist/theme/colors-utils'

export const Button = ({ variant, variants, variantColor, ...props }) => (
  <ChakraButton
    {...canada.variants.buttons.default}
    variantColor={variantColor}
    {...(variant === 'solid' && variantColor !== 'gray'
      ? {
          ...canada.variants.buttons.solid,
          borderColor: canada.colors[variantColor][800],
          bg: canada.colors[variantColor][700],
          _active: {
            bg: addBlack(canada.colors[variantColor][700], 0.3),
          },
        }
      : '')}
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
