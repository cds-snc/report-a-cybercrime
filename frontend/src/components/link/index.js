import React from 'react'
import { asAnchor } from '../../utils/asAnchor'
import { Link as ReachLink } from '@reach/router'
import PropTypes from 'prop-types'

const BaseLink = asAnchor(ReachLink)

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
