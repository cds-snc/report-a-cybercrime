import styled from '@emotion/styled'
import { FormHelperText as ChakraFormHelperText } from '@chakra-ui/core'

export const FormHelperText = styled(ChakraFormHelperText)()

FormHelperText.defaultProps = {
  as: 'p',
  mt: 0,
  fontSize: 'md',
  color: 'black',
  fontFamily: 'body',
  lineHeight: 1.25,
  maxW: '600px',
}
