import React from 'react'
import { Text, useFormControl } from '@chakra-ui/core'

export const FormErrorMessage = props => {
  const formControl = useFormControl(props)
  if (!formControl.isInvalid) {
    return null
  }
  return <Text {...props}>{props.children}</Text>
}

FormErrorMessage.defaultProps = {
  fontSize: 'md',
  fontWeight: 'bold',
  color: 'red.700',
  fontFamily: 'body',
  lineHeight: 1.25,
  mb: 1,
  maxW: '600px',
}
