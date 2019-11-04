/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { asAnchor } from '../../utils/asAnchor'
import { Link as ReactRouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Li } from '../list-item'

const BaseLink = asAnchor(ReactRouterLink)
const BaseAnchor = asAnchor('a')

export const Link = props => (
  <BaseLink
    fontSize={[2, null, 3]}
    lineHeight={[2, null, 3]}
    mb={4}
    colors="link"
    {...props}
  >
    {props.children}
  </BaseLink>
)

Link.propTypes = {
  children: PropTypes.any,
}

export const ButtonLink = props => (
  <BaseLink
    fontSize={[2, null, 3]}
    fontWeight="normal"
    lineHeight={[2, null, 3]}
    colors="button"
    mt={[2, null, 3]}
    py={1}
    px={[2, null, 3]}
    {...props}
    css={css`
      text-decoration: none;
    `}
    display="inline-block"
  >
    {props.children}
  </BaseLink>
)

ButtonLink.propTypes = {
  children: PropTypes.any,
}

export const ButtonAnchor = props => (
  <BaseAnchor
    fontSize={[2, null, 3]}
    fontWeight="normal"
    lineHeight={[2, null, 3]}
    colors="button"
    mt={[2, null, 3]}
    py={1}
    px={[2, null, 3]}
    {...props}
    css={css`
      text-decoration: none;
    `}
    display="inline-block"
  >
    {props.children}
  </BaseAnchor>
)

ButtonAnchor.propTypes = {
  children: PropTypes.any,
}

export const A = props => (
  <BaseAnchor
    fontSize={[2, null, 3]}
    lineHeight={[2, null, 3]}
    mb={4}
    colors="link"
    {...props}
  >
    {props.children}
  </BaseAnchor>
)

A.propTypes = {
  children: PropTypes.any,
}

export const FooterLink = props => (
  <Li ml={3} mb={0} display="inline-block">
    <BaseAnchor
      fontSize={[1, null, 2]}
      lineHeight={[1, null, 2]}
      colors="footerLink"
      {...props}
    >
      {props.children}
    </BaseAnchor>
  </Li>
)

FooterLink.propTypes = {
  children: PropTypes.any,
}
