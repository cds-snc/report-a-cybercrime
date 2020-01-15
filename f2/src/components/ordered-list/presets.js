import React from 'react'
import { List } from '@chakra-ui/core'
import PropTypes from 'prop-types'

export const Ol = props => {
  const { listStyleType, ...rest } = props

  return (
    <List
      as="ol"
      stylePos="outside"
      styleType={listStyleType}
      ml={5}
      spacing={1}
      {...rest}
    >
      {props.children}
    </List>
  )
}

Ol.defaultProps = {
  listStyleType: 'decimal',
}

Ol.propTypes = {
  listStyleType: PropTypes.string,
  children: PropTypes.any,
}
