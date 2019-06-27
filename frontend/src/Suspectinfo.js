import React from 'react'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
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
      <Trans>Add scammer details</Trans>
    </H1>
    <P>
      <Trans>
        Do you have any information about the scammer or who might be
        responsible?
      </Trans>
    </P>
    <p>
      <ButtonLink mb={[3, null, 5]} to="/suspectinfo">
        <Trans>Yes</Trans>
      </ButtonLink>
    </p>
    <br />
    <br />
    <p>
      <ButtonLink mb={[3, null, 5]} to="/moneylostquestion">
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
