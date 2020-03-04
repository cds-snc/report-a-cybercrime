import React from 'react'
import { Text as ChakraText } from '@chakra-ui/core'
import PropTypes from 'prop-types'

export const Text = React.forwardRef((props, ref) => {
  return (
    <ChakraText
      ref={ref}
      fontSize={['lg', null, 'xl', null]}
      lineHeight={1.25}
      fontFamily="body"
      color="black"
      {...props}
    >
      {props.children}
    </ChakraText>
  )
})

Text.propTypes = {
  children: PropTypes.any,
}
