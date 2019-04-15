import React from 'react'
import { Header } from '.'
import PropTypes from 'prop-types'

export const H1 = props => (
  <Header
    as="h1"
    fontSize={[5, null, 7]}
    lineHeight={[5, null, 7]}
    mb={4}
    fontWeight="bold"
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
    fontSize={[5, null, 6]}
    lineHeight={[5, null, 6]}
    mb={4}
    fontWeight="bold"
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
    fontSize={[4, null, 5]}
    lineHeight={[4, null, 5]}
    mb={4}
    fontWeight="bold"
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
    fontSize={[3, null, 4]}
    lineHeight={[3, null, 4]}
    mb={4}
    fontWeight="bold"
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
    fontSize={[2, null, 3]}
    lineHeight={[2, null, 3]}
    mb={4}
    fontWeight="bold"
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
    fontSize={[2, null, 3]}
    lineHeight={[2, null, 3]}
    mb={4}
    fontWeight="bold"
    {...props}
  >
    {props.children}
  </Header>
)

H6.propTypes = {
  children: PropTypes.any,
}
