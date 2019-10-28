import React from 'react'
import { ListItem } from '.'
import PropTypes from 'prop-types'

export const Li = props => (
  <ListItem
    fontSize={[2, null, 3]}
    lineHeight={[2, null, 3]}
    mb={[0, null, 1]}
    fontWeight="normal"
    {...props}
  >
    {props.children}
  </ListItem>
)

Li.propTypes = {
  children: PropTypes.any,
}
