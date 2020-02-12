/** @jsx jsx **/
import { jsx } from '@emotion/core'
import { Input as ChakraInput } from '@chakra-ui/core'

export const Input = props => (
  <ChakraInput
    autoComplete="off"
    rounded="none"
    borderWidth="2px"
    borderColor="black"
    maxW="300px"
    transition="0"
    _hover={{
      boxShadow: 'outlineHover',
      borderColor: 'black',
    }}
    _focus={{
      outline: 'none',
      bg: 'white',
      boxShadow: 'outline',
      borderColor: 'black',
      border: '3px',
    }}
    {...props.input}
    {...props}
  />
)
