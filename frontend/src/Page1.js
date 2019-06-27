import React from 'react'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1, H2 } from './components/header'
import { ButtonLink } from './components/link'
import { TrackPageViews } from './TrackPageViews'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

export const Page1 = () => (
  <CenterContent>
    <TrackPageViews />
    <H1 fontSize={[5, null, 6]}>
      <Trans>{'Report a scam or an online crime'}</Trans>
    </H1>
    <H2 fontSize={[3, null, 4]}>
      <Trans>{'First, find out which option is most relevant for you.'}</Trans>
    </H2>
    <ButtonLink mb={[3, null, 5]} to="/scaminfo">
      <Trans>{'Get Started'}</Trans>
    </ButtonLink>
  </CenterContent>
)
