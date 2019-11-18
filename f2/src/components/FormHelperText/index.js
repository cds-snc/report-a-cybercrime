import styled from '@emotion/styled'
import { FormHelperText as ChakraFormHelperText } from '@chakra-ui/core'
import { variant } from 'styled-system'

export const FormHelperText = styled(ChakraFormHelperText)(
  variant({
    variants: {
      above: {
        mt: 0,
        mb: 2,
      },
      below: {
        mt: 2,
        mb: 0,
      },
      unstyled: {
        m: 0,
      },
    },
  }),
)
