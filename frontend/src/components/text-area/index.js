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
  height,
  borders,
} from 'styled-system'
import { cleanProps } from '../../utils/cleanProps'

export const StyledTextArea = styled('textarea', {
  shouldForwardProp: prop => cleanProps(prop),
})`
  font-family: ${({ theme }) => theme.fontSans};
  margin: 0;
  ${display};
  ${fontSize};
  ${lineHeight};
  ${space};
  ${colorStyle};
  ${color};
  ${fontWeight};
  ${width};
  ${height};
  ${borders}
`
StyledTextArea.propTypes = {
  ...display.propTypes,
  ...fontSize.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...colorStyle.propTypes,
  ...color.propTypes,
  ...fontWeight.propTypes,
  ...width.propTypes,
  ...height.propTypes,
}

export const TextArea = props => (
  <StyledTextArea
    display="block"
    fontSize={[2, null, 3]}
    lineHeight={[2, null, 3]}
    colors="textArea"
    width={['300px', null, '500px']}
    height={['200px', null, '300px']}
    {...props}
  >
    {props.children}
  </StyledTextArea>
)

TextArea.propTypes = {
  children: PropTypes.any,
}
