import React from 'react'
import { OrderedList } from '.'
import PropTypes from 'prop-types'

export const Ol = props => (
  <OrderedList
    fontSize={[1, null, 2]}
    lineHeight={[1, null, 2]}
    pl={[5, null, 6]}
    mb={4}
    {...props}
  >
    {props.children}
  </OrderedList>
)

Ol.propTypes = {
  children: PropTypes.any,
}
