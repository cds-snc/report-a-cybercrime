import React from 'react'
import PropTypes from 'prop-types'
import { Button as ChakraButton, Box } from '@chakra-ui/core'

export const Button = ({ variants, variantColor, ...props }) => (
  <Box>
    <ChakraButton
      fontSize={['lg', null, 'xl', null]}
      fontWeight="normal"
      size="lg"
      rounded="none"
      variantColor={variantColor}
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
}
