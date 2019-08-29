/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { ApolloConsumer } from 'react-apollo'
import { Trans } from '@lingui/macro'
import { P } from '../components/paragraph'
import { H1, H2 } from '../components/header'
import { ButtonLink } from '../components/link'
import { Ul } from '../components/unordered-list'
import { Li } from '../components/list-item'
import { Text } from '../components/text'
import { Layout } from '../components/layout'
import { TrackPageViews } from '../TrackPageViews'

export const LandingPage = () => (
  <Layout>
    <TrackPageViews />
    <H1>
      <Trans>Report a scam</Trans>
    </H1>
    <ApolloConsumer>
      {client =>
        client.writeData({
          data: {
            doneForms: false,
            scamInfo: JSON.stringify({}),
            lostMoney: JSON.stringify({}),
            suspectInfo: JSON.stringify({}),
            files: [],
            contactInfo: JSON.stringify({}),
          },
        })
      }
    </ApolloConsumer>

    <P>
      <Trans>
        Tell the RCMP's National Cybercrime Coordination Unit about a scam to
        help police across Canada investigate.
      </Trans>
    </P>

    <P>
      <Trans>
        <strong>You will be asked to:</strong>
      </Trans>
    </P>

    <Text>
      <Ul fontSize={[8, null, 8]}>
        <Li>
          <Trans>Describe what happened</Trans>
        </Li>
        <Li>
          <Trans>Tell us how much money was lost</Trans>
        </Li>
        <Li>
          <Trans>Add clues about the suspect</Trans>
        </Li>
        <Li>
          <Trans>Attach any supporting files</Trans>
        </Li>
      </Ul>
    </Text>
    <P>
      <Trans>
        The more detail you can provide, the more police can learn to stop this
        from happening again.
      </Trans>
    </P>
    <ButtonLink color="black" mb={[3, null, 5]} to="scaminfo">
      <Trans>Report now</Trans>
    </ButtonLink>
  </Layout>
)
