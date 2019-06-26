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

export const Willbecontacted = () => (
  <CenterContent>
    <TrackPageViews />
    <H1 fontSize={[5, null, 6]}>
      <Trans>
        If the police need more information, would you like to be contacted
      </Trans>
    </H1>
    <p>
      <ButtonLink color="black" mb={[3, null, 5]} to="/contactinfo">
        <Trans>Yes</Trans>
      </ButtonLink>
    </p>
    <br />
    <p>
      <ButtonLink color="black" mb={[3, null, 5]} to="/confirmation">
        <Trans>No</Trans>
      </ButtonLink>
    </p>
    <br />
    <p>
      <ButtonLink color="black" mb={[3, null, 5]} to="/">
        <Trans>Cancel Report</Trans>
      </ButtonLink>
    </p>
  </CenterContent>
)
