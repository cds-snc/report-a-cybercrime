import React from 'react'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { Link } from './components/link'
import { H1, H2 } from './components/header'
import { P } from './components/paragraph'
import { TrackPageViews } from './TrackPageViews'
import { Counters } from './counters'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

export const Th1P1 = () => (
  <CenterContent>
    <TrackPageViews />
    <H1 fontSize={[4, null, 5]}>
      <Trans>
        We are gathering information on phone numbers, website URLs and email
        addresses
      </Trans>
    </H1>
    <H2 fontSize={[3, null, 4]}>
      <Trans>To learn more about the tools used to commit cybercrime</Trans>
    </H2>
    <P>
      <Trans>It takes 1 step to provide an insecure identifier.</Trans>
    </P>

    <P mt={[1, null, 4]}>
      <Link fontSize={[3, null, 4]} lineHeight={[3, null, 4]} to={'form1'}>
        <Trans>Submit an identifier</Trans>
      </Link>
    </P>
    <H2 fontSize={[3, null, 4]} mt={6}>
      <Trans>In the past month Canadians have told us about:</Trans>
    </H2>
    <Counters mt={[4, null, 5]} />
  </CenterContent>
)
