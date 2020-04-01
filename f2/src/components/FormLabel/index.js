import styled from '@emotion/styled'
import { FormLabel as ChakraFormLabel } from '@chakra-ui/core'

export const FormLabel = styled(ChakraFormLabel)()

FormLabel.defaultProps = {
  fontSize: 'xl',
  fontWeight: 'bold',
  fontFamily: 'body',
  p: 0,
  lineHeight: 1,
  maxW: '600px',
}
