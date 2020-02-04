import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@chakra-ui/core'

export const ButtonLink = props => (
  <Link color="blue.600" fontSize="lg" {...props}></Link>
)

ButtonLink.propTypes = {
  children: PropTypes.node,
}
