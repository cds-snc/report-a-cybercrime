import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './components/container'

const Layout = ({ children }) => (
  <Container maxWidth="650px" margin="auto">
    {children}
  </Container>
)

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
