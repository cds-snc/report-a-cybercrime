import React from 'react'
import PropTypes from 'prop-types'
import { A } from '../link'

export const SkipLink = props => <A {...props}>{props.children}</A>

SkipLink.propTypes = {
  children: PropTypes.any,
}
