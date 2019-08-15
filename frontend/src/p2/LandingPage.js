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
        You are not alone. You can
        <A href="http://www.rcmp-grc.gc.ca/ccaps-spcca/vic-eng.htm">
          talk to someone and get support.
        </A>
      </Trans>
    </P>

    <InfoCard>
      <H2 fontSize={[4, null, 5]}>
        <Trans>
          Help the police stop these crimes by telling them what happened
        </Trans>
      </H2>

      <P>
        <Trans>
          The RCMP's new National Cybercrime Coordination Unit helps police
          across Canada catch cybercriminals.
        </Trans>
      </P>

      <P>
        <Trans>
          Police will use your report either for intelligence or for
          investigations. They will not be able to help you resolve your
          situation or recover money.
        </Trans>
      </P>

      <P>
        <Trans>
          You may also want to report to the website where the scam took place,
          to your bank, if you lost money, and to the credit agencies,{' '}
          <A href="https://www.consumer.equifax.ca/personal/">Equifax</A> and{' '}
          <A href="https://www.transunion.ca/">TransUnion</A>, if you lost
          personal information.
        </Trans>
      </P>
    </InfoCard>

    <H2 fontSize={[4, null, 5]} marginTop={[4, null, 5]}>
      <Trans>Gather all you can about the scam.</Trans>
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
        <Trans>Documents, screenshots, receipts and/or conversations</Trans>
      </Li>
      <Li>
        <Trans>Information on how the scam impacted you</Trans>
      </Li>
    </Ul>

    <ButtonLink color="black" mb={[3, null, 5]} to="/p2/whathappened">
      <Trans>Report now</Trans>
    </ButtonLink>
  </Layout>
)
