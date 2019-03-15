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

const Warning = styled('div')`
  display: block;
  color: green;
  padding-top: 10pt;
  margin-left: 0pt;
  margin-bottom: 20pt;
  font-size: 19pt;
`

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

const ListItem = styled('li')`
  margin: 5pt;
  margin-left: 20pt;
  font-size: 19pt;
`

export const Screen1 = () => (
  <CenterContent>
    <Breadcrumb>
      <Link to={'/old'}>
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

    <Warning>
      <Trans>Please do not provide any personal information.</Trans>
    </Warning>

    <ApolloConsumer>
      {client => (
        <WhatHappenedForm
          onSubmit={data => {
            client.writeData({ data })
            navigate('/old/form2')
          }}
        />
      )}
    </ApolloConsumer>
  </CenterContent>
)
