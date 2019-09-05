import { Input } from '../input'
import { withProps } from 'recompose'
import theme from '../../theme'

export const TextInput = withProps({
  type: 'text',
  colors: 'inputField',
  fontSize: theme.fontSizes,
})(Input)
