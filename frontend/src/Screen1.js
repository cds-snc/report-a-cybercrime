/** @jsx jsx */
import React from 'react'
// import { Link, navigate } from '@reach/router'
import { navigate } from '@reach/router'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { Link } from './components/link'
import { ApolloConsumer } from 'react-apollo'
import { Breadcrumb } from './components/breadcrumb'
import { TrackPageViews } from './TrackPageViews'
import { WhatHappenedForm } from './WhatHappenedForm'
import { Text } from './components/text'
import { Container } from './components/container'
import { jsx, css } from '@emotion/core'
import { ListItem } from './components/list-item'

export const Screen1 = () => (
  <Container
    css={css`
      max-width: 750px;
      margin: auto;
    `}
  >
    <Breadcrumb>
      <Link to={'/'}>
        <Trans>Landing Page</Trans>
      </Link>
      <Text display="inline-block">
        <Trans>What Happened</Trans>
      </Text>
    </Breadcrumb>
    <H1>
      <Trans>Describe what happened</Trans>
    </H1>

    <TrackPageViews />
    <ul>
      <ListItem>
        <Trans>When did it take place?</Trans>
      </ListItem>
      <ListItem>
        <Trans>In general terms, who was involved?</Trans>
      </ListItem>
      <ListItem>
        <Trans>How were you affected?</Trans>
      </ListItem>
    </ul>

    <Container
      css={css`
        display: block;
        color: green;
        padding-top: 10pt;
        margin-left: 0pt;
        margin-bottom: 20pt;
        font-size: 19pt;
      `}
    >
      <Trans>Please do not provide any personal information.</Trans>
    </Container>

    <ApolloConsumer>
      {client => (
        <WhatHappenedForm
          onSubmit={data => {
            client.writeData({ data })
            navigate('/form2')
          }}
        />
      )}
    </ApolloConsumer>
  </Container>
)
