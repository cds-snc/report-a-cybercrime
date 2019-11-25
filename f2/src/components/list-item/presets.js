import React from 'react'
import { ListItem } from '@chakra-ui/core'
import PropTypes from 'prop-types'

export const Li = props => (
  <ListItem
    fontSize={['md', null, 'lg', null]}
    lineHeight={1.25}
    fontFamily="body"
    color="black"
    {...props}
  >
    {props.children}
  </ListItem>
)

Li.propTypes = {
  children: PropTypes.any,
}
