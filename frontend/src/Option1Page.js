import React from 'react'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { TrackPageViews } from './TrackPageViews'
import { Container } from './components/container'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

export const Option1Page = () => (
  <CenterContent>
    <TrackPageViews />
    <H1 textAlign="center">
      <Trans>Call 911</Trans>
    </H1>
    <Container>
      <Container marginTop={[6, null, 7]}>
        <P fontSize={[3, null, 4]} textAlign="center">
          <Trans>You will get a local immediate response.</Trans>
        </P>
      </Container>
    </Container>
  </CenterContent>
)
