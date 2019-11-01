import { Input } from '../input'
import { withProps } from 'recompose'
import theme from '../../theme'
import { TextInput as GrommetTextInput } from 'grommet'
import styled from '@emotion/styled-base'

export const TextInput = styled(GrommetTextInput)`
  border: 2px solid black;
`
