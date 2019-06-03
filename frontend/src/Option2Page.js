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

export const Option2Page = () => (
  <CenterContent>
    <TrackPageViews />
    <H1 textAlign="center">
      <Trans>You can call us</Trans>
      <br />
      <br />
      1-888-555-5555
    </H1>
    <Container>
      <Container marginTop={[6, null, 7]}>
        <P fontSize={[3, null, 4]}>
          <Trans>You’ll get specific advice based on your situation.</Trans>
        </P>
      </Container>
    </Container>
  </CenterContent>
)
