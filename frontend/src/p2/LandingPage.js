/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { ApolloConsumer } from 'react-apollo'
import { Trans } from '@lingui/macro'
import { P } from '../components/paragraph'
import { H1, H2 } from '../components/header'
import { A, ButtonLink } from '../components/link'
import { Ul } from '../components/unordered-list'
import { Li } from '../components/list-item'
import { InfoCard } from '../components/container'
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
            timeFrame: JSON.stringify({}),
            whatHappened: JSON.stringify({}),
            scammerDetails: JSON.stringify({}),
            impact: JSON.stringify({}),
            tellUsMore: JSON.stringify({}),
          },
        })
      }
    </ApolloConsumer>

    <P>
      <Trans>
        Scams can happen to anyone. They’re not always easy to recognize, and
        new ones are invented every day. You're not alone.
      </Trans>
    </P>

    <InfoCard>
      <H2 fontSize={[4, null, 5]}>
        <Trans>Help stop these crimes by reporting to police</Trans>
      </H2>
      <P>
        <Trans>
          The RCMP's new{' '}
          <A href="http://www.rcmp-grc.gc.ca/en/the-national-cybercrime-coordination-unit-nc3">
            National Cybercrime Coordination Unit
          </A>{' '}
          works with police across Canada to coordinate investigations into
          online scams.
        </Trans>
      </P>
      <P>
        <Trans>
          This unit will analyze your report and link it to similar reports so
          that police have more information to catch cybercriminals.
        </Trans>
      </P>
    </InfoCard>

    <H2 fontSize={[4, null, 5]} marginTop={[4, null, 5]}>
      <Trans>Gather all you can about the scam</Trans>
    </H2>
    <Ul>
      <Li>
        <Trans>Dates when the scam took place</Trans>
      </Li>
      <Li>
        <Trans>Descriptions of what happened</Trans>
      </Li>
      <Li>
        <Trans>Details on where the scam came from</Trans>
      </Li>
      <Li>
        <Trans>Documents, screenshots, receipts, or conversations</Trans>
      </Li>
    </Ul>
    <P>
      Police are focused on investigations and will not be able to help you
      recover money.
    </P>
    <ButtonLink color="black" mb={[3, null, 5]} to="/p2/timeframe">
      <Trans>Report now</Trans>
    </ButtonLink>
  </Layout>
)
