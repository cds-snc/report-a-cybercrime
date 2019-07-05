/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Trans } from '@lingui/macro'
import { P } from './components/paragraph'
import { H1, H2 } from './components/header'
import { ButtonLink } from './components/link'
import { TrackPageViews } from './TrackPageViews'
import { Layout } from './components/layout'

export const LandingPage = () => (
  <Layout>
    <TrackPageViews />
    <H1>
      <Trans>Report a scam</Trans>
    </H1>
    <P>
      <Trans>
        Tell the RCMP's National Cybercrime Coordination Unit (NC3) about a
        scam.
      </Trans>
    </P>
    <P>
      <Trans>
        NC3 will analyze your report and work with police across Canada to stop
        this from happening again.
      </Trans>
    </P>
    <H2 fontSize={[4, null, 5]}>
      <Trans>You will be asked to:</Trans>
    </H2>
    <P>
      <ul fontSize={[8, null, 8]}>
        <li>
          <Trans>Describe what happened</Trans>
        </li>
        <li>
          <Trans>Tell us how much money was lost</Trans>
        </li>
        <li>
          <Trans>Add details about the scammer</Trans>
        </li>
        <li>
          <Trans>Attach any supporting files</Trans>
        </li>
      </ul>
    </P>
    <P>
      <ButtonLink color="black" mb={[3, null, 5]} to="scaminfo">
        <Trans>Report now</Trans>
      </ButtonLink>
    </P>
  </Layout>
)
