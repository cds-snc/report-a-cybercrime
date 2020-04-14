import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Container } from '../container'
import { Flex, Stack } from '@chakra-ui/core'

export const Layout = (props) => {
  // scroll to the top of the page when this Layout renders
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <Container
      {...(props.fluid
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
        <Column columns={props.columns}>{props.children}</Column>
      </Row>
    </Container>
  )
}

Layout.propTypes = {
  fluid: PropTypes.bool,
  columns: PropTypes.any,
  noEffect: PropTypes.bool,
}

Layout.defaultProps = {
  noEffect: false,
  fluid: false,
  columns: { base: 1 },
}

export const Column = (props) => {
  const col = {}
  //Turn fractions into %
  Object.keys(props.columns).map((key) => {
    return (col[key] = props.columns[key] * 100 + '%')
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
      {...props}
    >
      {props.children}
    </Stack>
  )
}

export const Row = (props) => {
  return (
    <Flex {...props} mx={-2} wrap="wrap" className="row">
      {props.children}
    </Flex>
  )
}

Column.defaultProps = {
  columns: { base: 1 },
}
