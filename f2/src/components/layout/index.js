import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Container } from '../container'
import { Flex, Stack, Box } from '@chakra-ui/core'

export const Layout = ({ fluid, columns, noEffect, ...props }) => {
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
            px: 4,
            w: '100%',
          })}
      {...props}
    >
      <Row>
        <Column columns={columns}>{props.children}</Column>
      </Row>
    </Container>
  )
}

export const Column = ({ columns, ...props }) => {
  const col = {}
  //Turn fractions into %
  Object.keys(columns).map(key => {
    col[key] = columns[key] * 100 + '%'
  })
  // Keep width and mx after props to prevent them being overwritten
  return (
    <Stack
      className="col"
      flexShrink="0"
      flexGrow="0"
      flexBasis={col}
      maxW={col}
      px={2}
      mb={4}
    >
      <Stack {...props} h="100%"></Stack>
    </Stack>
  )
}

export const Row = props => {
  return (
    <Flex {...props} mx={-2} wrap="wrap" className="row">
      {props.children}
    </Flex>
  )
}

Layout.propTypes = {
  fluid: PropTypes.bool,
  columns: PropTypes.any,
}

Layout.defaultProps = {
  noEffect: false,
  fluid: false,
  columns: { base: 1 },
}

Column.defaultProps = {
  columns: { base: 1 },
}
