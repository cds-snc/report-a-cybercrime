import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '../container'

export const Layout = ({ children }) => (
  <Container maxWidth="650px" margin="auto">
    {children}
  </Container>
)

Layout.propTypes = {
  children: PropTypes.any,
}
