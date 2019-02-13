import React from 'react'
import { ListItem } from '.'
import PropTypes from 'prop-types'

export const Li = props => (
  <ListItem
    fontSize={[1, null, 2]}
    lineHeight={[1, null, 2]}
    mb={[0, null, 1]}
    fontWeight="400"
    {...props}
  >
    {props.children}
  </ListItem>
)

Li.propTypes = {
  children: PropTypes.any,
}
