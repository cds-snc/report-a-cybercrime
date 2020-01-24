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
      <Trans id="pageNotFound.header" />
    </H1>
    <P>
      <Trans id="pageNotFound.message" />
    </P>

    <TrackPageViews />
  </CenterContent>
)
