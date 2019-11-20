/** @jsx jsx **/
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { Input as ChakraInput } from '@chakra-ui/core'

export const Input = props => <ChakraInput {...props}></ChakraInput>
Input.propTypes = {
  children: PropTypes.any,
}
