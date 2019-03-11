import React from 'react'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { TrackPageViews } from './TrackPageViews'

const CenterContent = styled('div')`
  max-width: 950px;
  margin: auto;
`

export const NewLandingPage = () => (
  <CenterContent>
    <TrackPageViews />
    <H1 fontSize={[4, null, 6]}>
      <Trans>We want to help people affected by cybercrime.</Trans>
    </H1>
    <P>
      <Trans>
        Coming soon: tell us about your experiences to help us build a better
        service.
      </Trans>
    </P>
  </CenterContent>
)
