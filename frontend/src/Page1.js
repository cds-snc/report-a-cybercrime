import React from 'react'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1, H2 } from './components/header'
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

export const Page1 = () => (
  <CenterContent>
    <TrackPageViews />
    <H1 fontSize={[5, null, 6]}>
      <Trans>Report a scam</Trans>
    </H1>
    <H2 fontSize={[3, null, 4]}>
      <Trans>The RCMP needs your help to learn about scams in Canada.</Trans>
    </H2>
    <P mt={[4, null, 5]}>
      <Trans>Tell the RCMP about a scam you received from:</Trans>
    </P>
    <Ul mt={0}>
      <Li>
        <Trans>an email address</Trans>
      </Li>
      <Li>
        <Trans>a phone number</Trans>
      </Li>
      <Li>
        <Trans>a website</Trans>
      </Li>
    </Ul>
    <P fontSize={[2, null, 3]}>
      <Trans>
        Every report can help stop this from happening and protects others.
      </Trans>
    </P>

    <Button
      mb={[3, null, 5]}
      onClick={() => {
        window.location.href = '/flag'
      }}
      value="Report"
    >
      <Trans>Report now</Trans>
    </Button>
  </CenterContent>
)
