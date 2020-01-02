import React from 'react'
import PropTypes from 'prop-types'
import { Textarea as ChakraTextarea, useTheme } from '@chakra-ui/core'

export const TextArea = props => {
  const theme = useTheme()

  return (
    <ChakraTextarea
      {...theme.variants.forms.input}
      {...props}
    >
      {props.children}
    </ChakraTextarea>
  )
}

TextArea.propTypes = {
  children: PropTypes.any,
}
