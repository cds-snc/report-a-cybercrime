import React from 'react'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1, H2 } from './components/header'
import { P } from './components/paragraph'
import { Ul } from './components/unordered-list'
import { Li } from './components/list-item'
import { ButtonLink } from './components/link'
import { TrackPageViews } from './TrackPageViews'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

export const Feature1Page1 = () => (
  <CenterContent>
    <TrackPageViews />
    <H1 fontSize={[5, null, 6]}>
      <Trans>Report a scam</Trans>
    </H1>
    <H2 fontSize={[3, null, 4]}>
      <Trans>
        The Royal Canadian Mounted Police (RCMP) needs your help to learn about
        scams.
      </Trans>
    </H2>
    <P mt={[4, null, 5]}>
      <Trans>Tell the RCMP about a scam you received by submitting:</Trans>
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
    <ButtonLink mb={[3, null, 5]} to="page2">
      <Trans>Report now</Trans>
    </ButtonLink>
  </CenterContent>
)
