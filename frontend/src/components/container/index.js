import styled from '@emotion/styled'
import React from 'react'
import PropTypes from 'prop-types'

import {
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexBasis,
  flexDirection,
  width,
  height,
  color,
  borders,
  borderColor,
  flex,
  justifySelf,
  display,
  alignSelf,
  space,
  textAlign,
} from 'styled-system'
import tag from 'clean-tag'

export const Container = styled(tag.div)`
  ${alignItems}
  ${alignContent}
  ${justifyContent}
  ${flex}
  ${flexWrap}
  ${flexBasis}
  ${flexDirection}
  ${width}
  ${height}
  ${color}
  ${display}
  ${space}
  ${justifySelf}
  ${alignSelf}
  ${borders}
  ${borderColor}
  ${textAlign}
`
export const Content = props => (
  <Container m="auto" width={[3 / 5, null, 4 / 5]} {...props}>
    {props.children}
  </Container>
)

Content.propTypes = {
  children: PropTypes.any,
}
