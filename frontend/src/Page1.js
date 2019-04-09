import React from 'react'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1, H2 } from './components/header'
import { P } from './components/paragraph'
import { Ul } from './components/unordered-list'
import { Li } from './components/list-item'
import { ButtonLink } from './components/link'
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
      <Trans>Do you suspect a scam, cybercrime, or fraud?</Trans>
    </H1>
    <H2 fontSize={[3, null, 4]}>
      <Trans />
    </H2>
    <P mt={[4, null, 5]}>
      <Trans>
        You can help stop this from happening by sharing a suspicious:
      </Trans>
    </P>
    <Ul mt={0}>
      <Li>
        <Trans>email address</Trans>
      </Li>
      <Li>
        <Trans>phone number</Trans>
      </Li>
      <Li>
        <Trans>website</Trans>
      </Li>
    </Ul>
    <P mt={[4, null, 5]}>
      <Trans>We‘ll use this information to investigate.</Trans>
    </P>

    <ButtonLink mb={[3, null, 5]} to="/flag">
      <Trans>Continue</Trans>
    </ButtonLink>

    <P fontSize={[2, null, 3]}>
      <Trans>Over the past month, people have shared:</Trans>
    </P>
    <Counters emailAddresses={25} phoneNumbers={65} websites={83} mt={0} />
  </CenterContent>
)
