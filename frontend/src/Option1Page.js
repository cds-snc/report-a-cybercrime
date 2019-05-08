import React from 'react'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1, H2 } from './components/header'
import { P } from './components/paragraph'
import { ButtonLink } from './components/link'
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
      <Trans>You should:</Trans>
    </H1>
    <Container textAlign="center" fontSize={[5, null, 6]}>
      <Container>
        <ButtonLink mb={[3, null, 5]} to="">
          <Trans>Call 911</Trans>
        </ButtonLink>
      </Container>
      <Container marginTop={[3, null, 5]}>
        <H2 fontSize={[3, null, 4]}>
          <Trans>You will get:</Trans>
        </H2>
        <P>
          <Trans>Local, immediate response</Trans>
        </P>
      </Container>
    </Container>
  </CenterContent>
)
