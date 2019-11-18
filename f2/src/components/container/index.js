/** @jsx jsx **/
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'

import {
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexBasis,
  flexDirection,
  width,
  maxWidth,
  height,
  maxHeight,
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
import { cleanProps } from '../../utils/cleanProps'
import { Box } from '@chakra-ui/core'

export const Container = styled('div', {
  shouldForwardProp: prop => cleanProps(prop),
})`
  ${alignItems}
  ${alignContent}
  ${justifyContent}
  ${flex}
  ${flexWrap}
  ${flexBasis}
  ${flexDirection}
  ${width}
  ${maxWidth}
  ${height}
  ${maxHeight}
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

export const InfoCard = props => (
  <Box
    rounded="lg"
    border="2px"
    borderColor="blackAlpha.900"
    p={[3, null, 6]}
    bg="blackAlpha.100"
    {...props}
  ></Box>
)
