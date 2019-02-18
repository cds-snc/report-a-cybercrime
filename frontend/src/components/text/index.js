import styled from '@emotion/styled'
import {
  display,
  fontSize,
  lineHeight,
  space,
  color,
  fontWeight,
} from 'styled-system'
import tag from 'clean-tag'

export const StyledDiv = styled(tag.div)`
  font-family: ${({ theme }) => theme.fontSans};
  margin: 0;
  ${display};
  ${fontSize};
  ${lineHeight};
  ${space};
  ${color};
  ${fontWeight};
`

StyledDiv.propTypes = {
  ...display.propTypes,
  ...fontSize.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  ...fontWeight.propTypes,
}

export { Text } from './presets'
