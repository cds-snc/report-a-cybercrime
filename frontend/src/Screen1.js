/** @jsx jsx */
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { Link } from './components/link'
import { ApolloConsumer } from 'react-apollo'
import { Breadcrumb } from './components/breadcrumb'
import { TrackPageViews } from './TrackPageViews'
import { WhatHappenedForm } from './WhatHappenedForm'
import { Text } from './components/text'
import { Container } from './components/container'
import { jsx } from '@emotion/core'
import { Li } from './components/list-item'
import { Ul } from './components/unordered-list'

export const Screen1 = () => (
  <Container m="auto" width={[1, 1 / 2, 1 / 4]}>
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
    <Ul>
      <Li>
        <Trans>When did it take place?</Trans>
      </Li>
      <Li>
        <Trans>In general terms, who was involved?</Trans>
      </Li>
      <Li>
        <Trans>How were you affected?</Trans>
      </Li>
    </Ul>

    <Container color="green" display="block" pt={3} ml={1} mb={5} fontSize={4}>
      <Trans>Please do not provide any personal information.</Trans>
    </Container>

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
  </Container>
)
