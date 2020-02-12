import styled from '@emotion/styled'
import { FormHelperText as ChakraFormHelperText } from '@chakra-ui/core'
import { variant } from 'styled-system'

export const FormHelperText = styled(ChakraFormHelperText)(
  variant({
    variants: {
      above: {
        mt: -2,
        mb: 4,
      },
      below: {
        mt: 4,
        mb: 0,
      },
      unstyled: {
        m: 0,
      },
    },
  }),
)

FormHelperText.defaultProps = {
  variant: 'above',
  as: 'p',
  fontSize: 'md',
  color: 'black',
  fontFamily: 'body',
  lineHeight: 1.25,
  maxW: '600px',
}
