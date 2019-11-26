import React from 'react'
import PropTypes from 'prop-types'

import { withProps } from 'recompose'
import { Textarea as ChakraTextarea } from '@chakra-ui/core'

export const TextArea = props => (
  <ChakraTextarea
    rounded="none"
    borderWidth="2px"
    borderColor="black"
    _hover={{
      boxShadow: 'outlineHover',
      borderColor: 'black',
    }}
    _focus={{
      outline: 'none',
      bg: 'white',
      boxShadow: 'outline',
      borderColor: 'black',
    }}
    {...props}
  >
    {props.children}
  </ChakraTextarea>
)

TextArea.propTypes = {
  children: PropTypes.any,
}
