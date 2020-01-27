import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '../link'

export const ButtonLink = props => <Link {...props}></Link>

ButtonLink.propTypes = {
  children: PropTypes.node,
}
