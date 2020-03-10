import React from 'react'
import { ListItem } from '@chakra-ui/core'
import PropTypes from 'prop-types'

export const Li = props => (
  <ListItem
    fontSize={['lg', null, 'xl', null]}
    lineHeight={1.5}
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
