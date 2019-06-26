import React from 'react'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { ButtonLink } from './components/link'
import { TrackPageViews } from './TrackPageViews'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`
export const LandingPage = () => (
  <CenterContent>
    <TrackPageViews />
    <H1 fontSize={[5, null, 6]}>
      <Trans>Report a scam </Trans>
    </H1>

    <p fontSize={[8, null, 8]}>
      <Trans>
        Tell the RCMP's National Cybercrime Coordination Unit (NC3) about a
        scam. NC3 will analyze your report and work with police across Canada to
        stop this from happening again. You will be asked to:
      </Trans>
    </p>
    <ol fontSize={[8, null, 8]}>
      <li>
        <Trans>describe what happened</Trans>
      </li>
      <br />
      <li>
        <Trans>specify if money was lost</Trans>
      </li>
      <br />
      <li>
        <Trans>add scammer details</Trans>
      </li>
      <br />
      <li>
        <Trans>attach additfiles</Trans>
      </li>
      <br />
    </ol>
    <p>
      <ButtonLink color="black" mb={[3, null, 5]} to="/">
        <Trans>Report now</Trans>
      </ButtonLink>
    </p>
  </CenterContent>
)
