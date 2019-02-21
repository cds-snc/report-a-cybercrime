import styled from '@emotion/styled'
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
`

Container.propTypes = {
  ...alignItems.propTypes,
  ...alignContent.propTypes,
  ...justifyContent.propTypes,
  ...flex.propTypes,
  ...flexWrap.propTypes,
  ...flexBasis.propTypes,
  ...flexDirection.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...color.propTypes,
  ...display.propTypes,
  ...space.propTypes,
  ...justifySelf.propTypes,
  ...alignSelf.propTypes,
  ...borders.propTypes,
  ...borderColor.propTypes,
}
