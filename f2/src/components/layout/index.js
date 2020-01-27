import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '../container'

export const Layout = ({ fluid, columns, ...props }) => {
  const col = {
    base: (columns.base * 100) / 4 + '%',
    md: columns.md * 100 + '%',
    lg: columns.lg * 100 + '%',
    xl: columns.xl * 100 + '%',
  }

  return (
    <Container
      {...(fluid
        ? { w: '100%' }
        : {
            maxW: { sm: 540, md: 768, lg: 960, xl: 1200 },
            mx: 'auto',
            px: 2,
            w: '100%',
          })}
      {...props}
    >
      <Container w={col}>{props.children}</Container>
    </Container>
  )
}

Layout.propTypes = {
  fluid: PropTypes.bool,
  columns: PropTypes.any,
}

Layout.defaultProps = {
  fluid: false,
  columns: { base: 1, md: 1, lg: 1, xl: 1 },
}
