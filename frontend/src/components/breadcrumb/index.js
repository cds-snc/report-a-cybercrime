import { fontSize, lineHeight, space, color, fontWeight } from 'styled-system'
import styled from '@emotion/styled'
import tag from 'clean-tag'

export const BreadcrumbList = styled(tag.ol)`
  display: 'inline-block';
  font-family: ${({ theme }) => theme.fontSans};
  margin: 0;
  padding: 0;
  ${fontSize};
  ${lineHeight};
  ${space};
  ${fontWeight};
  ${color};
`
BreadcrumbList.propTypes = {
  ...fontSize.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  ...fontWeight.propTypes,
}

export const BreadcrumbListItem = styled(tag.li)`
  display: 'inline-block';
  font-family: ${({ theme }) => theme.fontSans};
  margin: 0;
  ${fontSize};
  ${lineHeight};
  ${space};
  ${color};
  ${fontWeight};
`

BreadcrumbListItem.propTypes = {
  ...fontSize.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  ...fontWeight.propTypes,
}

export { Breadcrumb } from './presets'
