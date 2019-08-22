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
        new ones are invented every day.
      </Trans>
    </P>

    <P>
      <Trans>
        You're not alone. You can{' '}
        <A href="http://www.rcmp-grc.gc.ca/ccaps-spcca/vic-eng.htm">
          talk to someone and get support.
        </A>
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
          helps police across Canada catch cybercriminals by providing
          intelligence for investigations.
        </Trans>
      </P>
      <P>
        <Trans>
          Police is focused on catching those responsible and will not be able
          to help you recover money. You should also report the scam to the
          website where it took place, to your financial institution, and
          tocredit agencies,{' '}
          <A href="https://www.consumer.equifax.ca/personal/">Equifax</A> and{' '}
          <A href="https://www.transunion.ca/">TransUnion</A>, if you lost money
          or personal information.
        </Trans>
      </P>
    </InfoCard>

    <H2 fontSize={[4, null, 5]} marginTop={[4, null, 5]}>
      <Trans>Gather all you can about the scam</Trans>
    </H2>

    <P>
      <Trans>Before you start, have this information ready:</Trans>
    </P>
    <Ul>
      <Li>
        <Trans>Details on when the scam took place</Trans>
      </Li>
      <Li>
        <Trans>
          Descriptions of what happened and what you know about the scammer
        </Trans>
      </Li>
      <Li>
        <Trans>Documents, screenshots, receipts, and conversations</Trans>
      </Li>
      <Li>
        <Trans>Information on how the scam has impacted you</Trans>
      </Li>
    </Ul>

    <ButtonLink color="black" mb={[3, null, 5]} to="/p2/timeframe">
      <Trans>Report now</Trans>
    </ButtonLink>
  </Layout>
)
