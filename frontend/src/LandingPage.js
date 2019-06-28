/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { P } from './components/paragraph'
import { H1, H2 } from './components/header'
import { ButtonLink } from './components/link'
import { TrackPageViews } from './TrackPageViews'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

export const LandingPage = () => (
  <CenterContent>
    <TrackPageViews />
    <H1 fontSize={[5, null, 6]}>
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
          <Trans>Specify whether money was lost</Trans>
        </li>
        <li>
          <Trans>Add scammer details</Trans>
        </li>
        <li>
          <Trans>Attach supporting files</Trans>
        </li>
      </ul>
    </P>
    <P>
      <ButtonLink color="black" mb={[3, null, 5]} to="scaminfo">
        <Trans>Report now</Trans>
      </ButtonLink>
    </P>
  </CenterContent>
)
