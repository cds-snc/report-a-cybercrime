/** @jsx jsx **/
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'
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
  position,
  top,
  right,
  bottom,
  left,
  zIndex,
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
  ${position}
  ${top}
  ${bottom}
  ${left}
  ${right}
  ${zIndex}
`
export const Content = props => (
  <main
    css={css`
      flex: 1 0 auto;
    `}
  >
    <Container m="auto" width={[9 / 10, null, 4 / 5]} {...props}>
      {props.children}
    </Container>
  </main>
)

Content.propTypes = {
  children: PropTypes.any,
}
