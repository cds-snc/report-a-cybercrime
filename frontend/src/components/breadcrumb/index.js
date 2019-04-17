import { fontSize, lineHeight, space, color, fontWeight } from 'styled-system'
import styled from '@emotion/styled'
import { cleanProps } from '../../utils/cleanProps'

export const BreadcrumbList = styled('ul', {
  shouldForwardProp: prop => cleanProps(prop),
})`
  display: inline-block;
  list-style-type: none;
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

export const BreadcrumbListItem = styled('li', {
  shouldForwardProp: prop => cleanProps(prop),
})`
  display: inline-block;
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
