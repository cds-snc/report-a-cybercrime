/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Trans } from '@lingui/macro'
import { P } from '../components/paragraph'
import { H1 } from '../components/header'
import { Ul } from '../components/unordered-list'
import { Li } from '../components/list-item'
import { InfoCard } from '../components/container'
import { Layout } from '../components/layout'
import { TrackPageViews } from '../TrackPageViews'
import { ButtonsContainer } from '../components/buttons-container'

export const LandingPage = () => (
  <Layout>
    <TrackPageViews />
    <H1>
      <Trans>Report a scam</Trans>
    </H1>
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
        Your report helps the RCMP learn about these crimes and helps police
        across Canada catch cybercriminals.
      </Trans>
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

    <ButtonsContainer
      buttonLink={true}
      cancel={false}
      landing={true}
      route="/p2/timeframe"
    />
  </Layout>
)
