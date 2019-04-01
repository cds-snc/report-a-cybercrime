import React from 'react'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { A, Link } from './components/link'
import { H1, H2 } from './components/header'
import { P, Lead } from './components/paragraph'
import { Ol } from './components/ordered-list'
import { Li } from './components/list-item'
import { Omnibox } from './Omnibox'
import { Query } from 'react-apollo'
import { TrackPageViews } from './TrackPageViews'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

export const LandingPage = () => (
  <CenterContent>
    <H1>
      <Trans>Have you or someone you know encountered a cybercrime?</Trans>
    </H1>
    <H2 fontSize={[3, null, 4]}>
      <Trans>Tell us your story in three easy steps:</Trans>
    </H2>
    <TrackPageViews />
    <Omnibox
      onPhoneNumber={console.log}
      onUrl={console.log}
      onEmail={console.log}
    />
  </CenterContent>
)
