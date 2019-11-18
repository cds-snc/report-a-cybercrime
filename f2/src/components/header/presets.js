import React from 'react'
import { Heading } from '@chakra-ui/core'
import PropTypes from 'prop-types'

export const H1 = props => (
  <Heading
    as="h1"
    fontSize={['4xl', null, '5xl', null]}
    fontFamily="heading"
    lineHeight={1}
    {...props}
  >
    {props.children}
  </Heading>
)

H1.propTypes = {
  children: PropTypes.any,
}

export const H2 = props => (
  <Heading
    as="h2"
    fontSize={['3xl', null, null, '4xl']}
    fontFamily="heading"
    lineHeight={1.25}
    {...props}
  >
    {props.children}
  </Heading>
)

H2.propTypes = {
  children: PropTypes.any,
}

export const H3 = props => (
  <Heading
    as="h3"
    fontSize={['2xl', null, null, '3xl']}
    fontFamily="heading"
    lineHeight={1.25}
    {...props}
  >
    {props.children}
  </Heading>
)

H3.propTypes = {
  children: PropTypes.any,
}

export const H4 = props => (
  <Heading
    as="h4"
    fontSize={['xl', null, null, '2xl']}
    fontFamily="heading"
    lineHeight={1.25}
    color="gray.700"
    {...props}
  >
    {props.children}
  </Heading>
)

H4.propTypes = {
  children: PropTypes.any,
}

export const H5 = props => (
  <Heading
    as="h5"
    fontSize={['lg', null, null, 'xl']}
    fontFamily="heading"
    lineHeight={1.25}
    color="gray.600"
    {...props}
  >
    {props.children}
  </Heading>
)

H5.propTypes = {
  children: PropTypes.any,
}

export const H6 = props => (
  <Heading
    as="h6"
    fontSize={['lg', null, null, 'xl']}
    fontFamily="heading"
    lineHeight={1.25}
    color="gray.500"
    {...props}
  >
    {props.children}
  </Heading>
)

H6.propTypes = {
  children: PropTypes.any,
}
