import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '@chakra-ui/core'

export const P = props => (
  <Text
    fontSize={['md', null, 'lg', null]}
    lineHeight={1.25}
    fontFamily="body"
    mb={4}
    color="black"
    {...props}
  >
    {props.children}
  </Text>
)

P.propTypes = {
  children: PropTypes.any,
}

export const Lead = props => (
  <Text
    fontSize={['lg', null, 'xl', null]}
    lineHeight={1.25}
    fontFamily="body"
    mb={4}
    color="black"
    {...props}
  >
    {props.children}
  </Text>
)

Lead.propTypes = {
  children: PropTypes.any,
}
