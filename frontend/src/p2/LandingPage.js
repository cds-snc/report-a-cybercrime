/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { ApolloConsumer } from 'react-apollo'
import { Trans } from '@lingui/macro'
import { P } from '../components/paragraph'
import { H1, H2 } from '../components/header'
import { ButtonLink } from '../components/link'
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

    <P fontSize={[4, null, 5]}>
      <Trans>Scams can happen to anyone.</Trans>
    </P>
    <P>
      <Trans>
        They’re not always easy to spot, and new ones are invented every day.
      </Trans>
    </P>
    <H2 fontSize={[4, null, 5]}>
      <Trans>Help protect others by reporting these crimes to police.</Trans>
    </H2>

    <Ul>
      <Li>
        <Trans>Tell us when the scam took place</Trans>
      </Li>
      <Li>
        <Trans>Describe what happened</Trans>
      </Li>
      <Li>
        <Trans>Gather clues about the scammer</Trans>
      </Li>
      <Li>
        <Trans>Let us know the impact the scam has had on you</Trans>
      </Li>
    </Ul>

    <InfoCard>
      <H2 fontSize={[4, null, 5]}>
        <Trans>How the police can help</Trans>
      </H2>

      <P>
        <Trans>
          Police can stop these crimes by catching the scammers responsible.
        </Trans>
      </P>
      <P>
        <Trans>
          The RCMP’s new National Cybercrime Coordination Unit helps police
          across Canada by analyzing your reports, connecting similar
          information, and improving investigations across the country.
        </Trans>
      </P>
      <P>
        <Trans>
          Your report is confidential and will only be accessed by the RCMP and
          other police partners.
        </Trans>
      </P>
    </InfoCard>

    <ButtonLink color="black" mb={[3, null, 5]} to="/p2/whathappened">
      <Trans>Report now</Trans>
    </ButtonLink>
  </Layout>
)
