import React from 'react'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
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
      <Trans>Report a scam </Trans>
    </H1>

    <p fontSize={[8, null, 8]}>
      <Trans>
        <h2>what do you need to prepare in order to report the scam online?</h2>
      </Trans>
    </p>
    <ol fontSize={[8, null, 8]}>
      <h4>
        <li>
          <Trans>suspect information</Trans>
        </li>
        <br />
        <li>
          <Trans>image and/or other files</Trans>
        </li>
        <br />

        <li>
          <Trans>describe of the scan event</Trans>
        </li>
        <br />
      </h4>
    </ol>
    <p>
      <ButtonLink color="black" mb={[3, null, 5]} to="/ifvictimquestion">
        <Trans>Report online</Trans>
      </ButtonLink>
    </p>
  </CenterContent>
)
