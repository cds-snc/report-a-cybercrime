/** @jsx jsx **/
import { jsx } from '@emotion/core'
import { Input as ChakraInput } from '@chakra-ui/core'
import canada from '../../theme/canada'

export const Input = props => (
  <ChakraInput
    onKeyPress={e => {
      e.key === 'Enter' && e.preventDefault()
    }}
    autoComplete="off"
    {...canada.variants.inputs.inputs}
    {...props.input}
    {...props}
  />
)
