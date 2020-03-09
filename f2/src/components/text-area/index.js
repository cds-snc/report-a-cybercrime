import React from 'react'
import { Textarea as ChakraTextarea } from '@chakra-ui/core'
import canada from '../../theme/canada'

export const TextArea = props => (
  <ChakraTextarea
    {...canada.variants.inputs.inputs}
    maxW="600px"
    {...props.input}
    {...props}
  />
)
