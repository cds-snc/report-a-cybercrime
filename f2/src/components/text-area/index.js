import React from 'react'
import PropTypes from 'prop-types'

import { withProps } from 'recompose'
import { Textarea } from '@chakra-ui/core'

export const StyledTextArea = withProps({})(Textarea)

export const TextArea = props => (
  <StyledTextArea {...props}>{props.children}</StyledTextArea>
)

TextArea.propTypes = {
  children: PropTypes.any,
}
