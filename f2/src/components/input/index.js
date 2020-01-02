/** @jsx jsx **/
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { Input as ChakraInput, useTheme } from '@chakra-ui/core'

export const Input = props => {
  const theme = useTheme()
  return (
    <ChakraInput
      maxW="300px"
      {...theme.variants.forms.input}
      {...props}
    />
  )
}

Input.propTypes = {
  children: PropTypes.any,
}
