import React from 'react'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { ButtonLink } from './components/link'
import { TrackPageViews } from './TrackPageViews'
import { Container } from './components/container'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

export const IdentityPage = () => (
  <CenterContent>
    <TrackPageViews />
    <H1 textAlign="center" fontSize={[5, null, 6]}>
      <Trans>How do you want to report?</Trans>
    </H1>
    <Container textAlign="center">
      <Container>
        <ButtonLink mb={[3, null, 5]} to="">
          <Trans>Anonymously</Trans>
        </ButtonLink>
      </Container>
      <Container>
        <ButtonLink mb={[3, null, 5]} to="">
          <Trans>Full report with my information</Trans>
        </ButtonLink>
      </Container>
    </Container>
  </CenterContent>
)
