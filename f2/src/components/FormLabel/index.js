import styled from '@emotion/styled'
import { FormLabel as ChakraFormLabel } from '@chakra-ui/core'
import { variant } from 'styled-system'

export const FormLabel = styled(ChakraFormLabel)()

FormLabel.defaultProps = {
  fontSize: 'xl',
  fontWeight: 'bold',
  fontFamily: 'body',
  pb: 1,
  lineHeight: 1,
}
