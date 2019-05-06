import React from 'react'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { ButtonLink, ButtonAnchor } from './components/link'
import { TrackPageViews } from './TrackPageViews'
import { Container } from './components/container'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

export const Option3Page = () => (
  <CenterContent>
    <TrackPageViews />
    <H1 textAlign="center" fontSize={[5, null, 6]}>
      <Trans>Reporting Options</Trans>
    </H1>
    <Container textAlign="center">
      <Container>
        <ButtonLink mb={[3, null, 5]} to="">
          <Trans>Report online</Trans>
        </ButtonLink>
      </Container>
      <Container>
        <ButtonLink mb={[3, null, 5]} to="">
          <Trans>Long form</Trans>
        </ButtonLink>
      </Container>
      <Container>
        <ButtonAnchor
          mb={[3, null, 5]}
          href="http://www.antifraudcentre-centreantifraude.ca/reportincident-signalerincident/index-eng.htm"
        >
          <Trans>Call the Canadian Anti-Fraud Centre</Trans>
        </ButtonAnchor>
      </Container>
    </Container>
  </CenterContent>
)
