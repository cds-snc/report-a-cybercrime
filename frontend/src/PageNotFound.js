import React from 'react'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { TrackPageViews } from './TrackPageViews'

const CenterContent = styled('div')`
  text-align: center;
`

export const PageNotFound = () => (
  <CenterContent>
    <H1>
      <Trans>Page not found</Trans>
    </H1>
    <P>
      <Trans>Sorry, the page you were trying to view does not exist.</Trans>
    </P>

    <TrackPageViews />
  </CenterContent>
)
