/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { ApolloConsumer } from 'react-apollo'
import { Trans } from '@lingui/macro'
import { P } from '../components/paragraph'
import { H1 } from '../components/header'
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
        Scams can happen to anyone. They’re not always easy to recognize and new
        ones are invented every day.
      </Trans>
    </P>
    <InfoCard>
      <P>
        <Trans>
          <strong>Before you start, gather what you can about the scam:</strong>
        </Trans>
      </P>
      <Ul>
        <Li>
          <Trans>Dates when it took place</Trans>
        </Li>
        <Li>
          <Trans>Descriptions of what happened</Trans>
        </Li>
        <Li>
          <Trans>Details on where it came from</Trans>
        </Li>
        <Li>
          <Trans>Documents, screenshots, or receipts</Trans>
        </Li>
      </Ul>
    </InfoCard>
    <br></br>
    <P>
      <Trans>
        Your report helps the RCMP learn about scams and helps police across
        Canada catch cybercriminals.
      </Trans>
    </P>
    <ButtonLink color="black" mb={[3, null, 5]} to="/p2/timeframe">
      <Trans>Report now</Trans>
    </ButtonLink>
    <P>
      <Trans>
        <strong>You may also want to:</strong>
      </Trans>
    </P>
    <P>
      <Ul>
        <Li>
          <Trans>Report directly to the place where the scam happened.</Trans>
        </Li>
        <Li>
          <Trans>
            Report to your financial institution, if you lost money.
          </Trans>
        </Li>
        <Li>
          <Trans>
            Report to the credit bureaus,{' '}
            <A href="https://www.consumer.equifax.ca/personal/">Equifax</A> and{' '}
            <A href="https://www.transunion.ca/">TransUnion</A>, if your
            identity was stolen.
          </Trans>
        </Li>
      </Ul>
    </P>
  </Layout>
)
