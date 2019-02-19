import styled from '@emotion/styled'
import { fontSize, lineHeight, space, color, fontWeight } from 'styled-system'
import tag from 'clean-tag'

export const BaseButton = styled(tag.button)`
  font-family: ${({ theme }) => theme.fontSans};
  margin: 0;
  border: 0;
  &:focus {
    outline: 3px solid #ffbf47;
  }
  ${fontSize};
  ${lineHeight};
  ${space};
  ${color};
  ${fontWeight};
`

BaseButton.propTypes = {
  ...fontSize.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  ...fontWeight.propTypes,
}

export { Button } from './presets'
