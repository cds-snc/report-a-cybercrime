import React from 'react'
import { BackButton } from '../backbutton'
import { Stack } from '@chakra-ui/core'
import { H1 } from '../header'
import { P } from '../paragraph'
import { Page } from '../Page'
import { Container, Row, Col } from 'react-bootstrap'

export const TestPage = (props) => {
  return (
    <Page>
      <BackButton />
      <H1>{props.title}</H1>
      <Stack spacing={4}>
        <P>{props.description}</P>
      </Stack>
      <Container>
        <Row>
          <Col sm={1} />
          <Col sm={6}>{props.children}</Col>
          <Col sm={5} />
        </Row>
      </Container>
    </Page>
  )
}
