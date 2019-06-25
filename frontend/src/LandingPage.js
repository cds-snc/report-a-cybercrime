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
      what do you need to prepare in order to report the scam online:
    </p>
    <ol fontSize={[8, null, 8]}>
      <li>suspect information</li>
      <br />
      <li>image and/or other files</li>
      <br />

      <li>describe of the scan event</li>
      <br />
    </ol>
    <p>
      <ButtonLink color="black" mb={[3, null, 5]} to="/">
        <Trans>Talk to someone</Trans>
      </ButtonLink>
    </p>
    <p>
      <ButtonLink color="black" mb={[3, null, 5]} to="/">
        <Trans>Report online</Trans>
      </ButtonLink>
    </p>
  </CenterContent>
)
