import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Container } from '../container'
import { Flex, Stack } from '@chakra-ui/core'

export const Layout = ({ fluid, columns, ...props }) => {
  const col = {
    base: columns.base * 100 + '%',
    md: columns.md * 100 + '%',
    lg: columns.lg * 100 + '%',
    xl: columns.xl * 100 + '%',
  }

  // scroll to the top of the page when this Layout renders
  useEffect(() => {
    window.scrollTo(0, 0)
  })

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

export const Column = ({ columns, ...props }) => {
  const col = {
    base: columns.base * 100 + '%',
    md: columns.md * 100 + '%',
    lg: columns.lg * 100 + '%',
    xl: columns.xl * 100 + '%',
  }
  // Keep width and mx after props to prevent them being overwritten
  return (
    <Stack {...props} mx={2} w={col}>
      {props.children}
    </Stack>
  )
}

export const Row = props => {
  return (
    <Flex {...props} mx={-2}>
      {props.children}
    </Flex>
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
