import React from 'react'
import { asAnchor } from '../../utils/asAnchor'
import { Link as ReachLink } from '@reach/router'
import PropTypes from 'prop-types'
import { Li } from '../list-item'

const BaseLink = asAnchor(ReachLink)
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
