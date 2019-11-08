import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { withProps } from 'recompose'
import { Textarea } from '@chakra-ui/core'

export const StyledTextArea = withProps({})(Textarea)

export const TextArea = props => (
  <StyledTextArea {...props}>{props.children}</StyledTextArea>
)

TextArea.propTypes = {
  children: PropTypes.any,
}
