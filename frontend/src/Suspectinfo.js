import React from 'react'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { ButtonLink } from './components/link'
import { TrackPageViews } from './TrackPageViews'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: AudioTrack;
`

export const Suspectinfo = () => (
  <CenterContent>
    <TrackPageViews />
    <H1 fontSize={[5, null, 6]}>
      <Trans>Do you have information about the suspect</Trans>
    </H1>
    <p>
      <ButtonLink mb={[3, null, 5]} to="/urgency">
        <Trans>Yes</Trans>
      </ButtonLink>
    </p>
    <br />
    <br />
    <p>
      <ButtonLink mb={[3, null, 5]} to="/urgency">
        <Trans>No</Trans>
      </ButtonLink>
    </p>
    <br />
    <br />
    <p>
      <ButtonLink mb={[3, null, 5]} to="/">
        <Trans>Cancel Report</Trans>
      </ButtonLink>
    </p>
  </CenterContent>
)
