import styled from '@emotion/styled'
import { fontSize, lineHeight, space, color, fontWeight } from 'styled-system'
import tag from 'clean-tag'

export const Paragraph = styled(tag.p)`
  font-family: ${({ theme }) => theme.fontSans};
  margin: 0;
  ${fontSize};
  ${lineHeight};
  ${space};
  ${color};
  ${fontWeight};
`

Paragraph.propTypes = {
  ...fontSize.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  ...fontWeight.propTypes,
}

export { P, Lead } from './presets'
