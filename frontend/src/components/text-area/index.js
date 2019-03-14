import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import {
  display,
  fontSize,
  lineHeight,
  space,
  color,
  colorStyle,
  fontWeight,
  width,
} from 'styled-system'
import tag from 'clean-tag'

export const StyledTextArea = styled(tag.textarea)`
  font-family: ${({ theme }) => theme.fontSans};
  margin: 0;
  ${display};
  ${fontSize};
  ${lineHeight};
  ${space};
  ${colorStyle};
  ${color};
  ${fontWeight};
  ${width}
`

StyledTextArea.propTypes = {
  ...display.propTypes,
  ...fontSize.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  ...fontWeight.propTypes,
}

export const TextArea = props => (
  <StyledTextArea
    display="block"
    fontSize={[2, null, 3]}
    lineHeight={[2, null, 3]}
    colors="textArea"
    width={['300px', null, '600px']}
    {...props}
  >
    {props.children}
  </StyledTextArea>
)

TextArea.propTypes = {
  children: PropTypes.any,
}
