import { fontSize, lineHeight, space, color, fontWeight } from 'styled-system'
import tag from 'clean-tag'
import styled from '@emotion/styled'

export const BreadcrumbListItem = styled(tag.li)`
  display: 'inline-block',
  position: 'relative',
  font-family: ${({ theme }) => theme.fontSans};
  // margin: 0;
  ${fontSize};
  ${lineHeight};
  ${space};
  ${color};
  ${fontWeight};
`

export const BreadcrumbList = styled(tag.ol)({
  margin: 0,
  padding: 0,
  listStyleType: 'none',
  display: 'block',
})

export { Breadcrumb } from './presets'
