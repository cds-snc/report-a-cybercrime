import { fontSize, lineHeight, space, color, fontWeight } from 'styled-system'
import styled from '@emotion/styled'
import tag from 'clean-tag'

export const UnorderedList = styled(tag.ul)`
  font-family: ${({ theme }) => theme.fontSans};
  margin: 0;
  padding: 0;
  ${fontSize};
  ${lineHeight};
  ${space};
  ${fontWeight};
  ${color};
`
UnorderedList.propTypes = {
  ...fontSize.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  ...fontWeight.propTypes,
}

export { Ul } from './presets'
