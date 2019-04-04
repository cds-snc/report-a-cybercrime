import React from 'react'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { Link } from './components/link'
import { H1, H2, H3 } from './components/header'
import { P } from './components/paragraph'
import { Ul } from './components/unordered-list'
import { Li } from './components/list-item'
import { Button } from './components/button'
import { TrackPageViews } from './TrackPageViews'
import { Counters } from './counters'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

export const Th1P1 = () => (
  <CenterContent>
    <TrackPageViews />
    <H1 fontSize={[5, null, 6]}>
      <Trans>Do you suspect a scam? Let us know.</Trans>
    </H1>
    <H2 fontSize={[3, null, 4]}>
      <Trans>Tell us what you're worried about.</Trans>
    </H2>

    <P mt={[4, null, 5]}>
      <Trans>You can share:</Trans>
    </P>
    <Ul mt={0}>
      <Li>an email address</Li>
      <Li>a phone number</Li>
      <Li>a website link</Li>
    </Ul>

    <Button mb={[3, null, 5]}>
      <Trans>Continue</Trans>
    </Button>

    <P fontSize={[2, null, 3]}>
      <Trans>In the past month people have told us about:</Trans>
    </P>
    <Counters mt={0} />
  </CenterContent>
)
