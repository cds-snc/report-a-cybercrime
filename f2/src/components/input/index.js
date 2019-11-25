/** @jsx jsx **/
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { Input as ChakraInput } from '@chakra-ui/core'

export const Input = props => (
  <ChakraInput
    borderWidth="2px"
    borderColor="black"
    maxW="300px"
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
  />
)

Input.propTypes = {
  children: PropTypes.any,
}
