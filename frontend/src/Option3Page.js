import React from 'react'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { A } from './components/link'
import { P } from './components/paragraph'
import { TrackPageViews } from './TrackPageViews'
import { Container } from './components/container'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

export const Option3Page = () => (
  <CenterContent>
    <TrackPageViews />
    <H1 textAlign="center">
      <Trans>You can report online</Trans>
      <br />
      <A href="https://report-cyber.ca">
        <Trans>report-cyber.ca</Trans>
      </A>
    </H1>
    <Container>
      <Container marginTop={[6, null, 7]}>
        <P fontSize={[3, null, 4]}>
          <Trans>
            You’ll make the Royal Canadian Mounted Police aware of your
            situation and get general advice.
          </Trans>
        </P>
      </Container>
    </Container>
  </CenterContent>
)
