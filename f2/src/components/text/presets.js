import React from 'react'
import { Text as ChakraText } from '@chakra-ui/core'
import PropTypes from 'prop-types'

export const Text = props => (
  <ChakraText
    fontSize={['md', null, 'lg', null]}
    lineHeight={1.25}
    fontFamily="body"
    color="black"
    {...props}
  >
    {props.children}
  </ChakraText>
)

Text.propTypes = {
  children: PropTypes.any,
}
