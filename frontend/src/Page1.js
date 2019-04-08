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
      <Trans>See a sign of trouble?</Trans>
    </H1>
    <H2 fontSize={[3, null, 4]}>
      <Trans>Let us know and help us identify cybercriminals.</Trans>
    </H2>

    <P mt={[4, null, 5]}>
      <Trans>You can signal:</Trans>
    </P>
    <Ul mt={0}>
      <Li>
        <Trans>an email address</Trans>
      </Li>
      <Li>
        <Trans>a phone number</Trans>
      </Li>
      <Li>
        <Trans>a website link</Trans>
      </Li>
    </Ul>

    <Button
      mb={[3, null, 5]}
      onClick={() => {
        window.location.href = '/flag'
      }}
      value="Continue"
    >
      <Trans>Continue</Trans>
    </Button>

    <P fontSize={[2, null, 3]}>
      <Trans>In the past month, people have shared:</Trans>
    </P>
    <Counters emailAddresses={25} phoneNumbers={8} websites={83} mt={0} />
  </CenterContent>
)
