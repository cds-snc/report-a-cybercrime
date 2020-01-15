import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '../container'

export const Layout = ({ fluid, ...props }) => (
  <Container
    {...(fluid
      ? { w: '100%' }
      : {
          maxW: { sm: 540, md: 768, lg: 960, xl: 1200 },
          mx: 'auto',
          px: 2,
          w: { base: '100%', md: '66.66%' },
        })}
    {...props}
  />
)

Layout.propTypes = {
  fluid: PropTypes.bool,
}

Layout.defaultProps = {
  fluid: false,
}
