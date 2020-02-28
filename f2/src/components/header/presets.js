import React from 'react'
import { Heading as Header } from '@chakra-ui/core'
import PropTypes from 'prop-types'

export const H1 = props => (
  <Header
    as="h1"
    fontSize={{ base: '4xl', md: '5xl' }}
    fontFamily="heading"
    lineHeight={1.15}
    {...props}
  >
    {props.children}
  </Header>
)

H1.propTypes = {
  children: PropTypes.any,
}

export const H2 = props => (
  <Header
    as="h2"
    fontSize="3xl"
    fontFamily="heading"
    lineHeight={1.25}
    {...props}
  >
    {props.children}
  </Header>
)

H2.propTypes = {
  children: PropTypes.any,
}

export const H3 = props => (
  <Header
    as="h3"
    fontSize="xl"
    fontFamily="heading"
    lineHeight={1.25}
    {...props}
  >
    {props.children}
  </Header>
)

H3.propTypes = {
  children: PropTypes.any,
}

export const H4 = props => (
  <Header
    as="h4"
    fontSize="lg"
    fontFamily="heading"
    lineHeight={1.25}
    color="gray.700"
    {...props}
  >
    {props.children}
  </Header>
)

H4.propTypes = {
  children: PropTypes.any,
}

export const H5 = props => (
  <Header
    as="h5"
    fontSize="lg"
    fontFamily="heading"
    lineHeight={1.25}
    color="gray.600"
    {...props}
  >
    {props.children}
  </Header>
)

H5.propTypes = {
  children: PropTypes.any,
}

export const H6 = props => (
  <Header
    as="h6"
    fontSize="lg"
    fontFamily="heading"
    lineHeight={1.25}
    color="gray.500"
    {...props}
  >
    {props.children}
  </Header>
)

H6.propTypes = {
  children: PropTypes.any,
}
