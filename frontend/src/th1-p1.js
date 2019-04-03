import React from 'react'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { A, Link } from './components/link'
import { H1, H2 } from './components/header'
import { P, Lead } from './components/paragraph'
import { Ol } from './components/ordered-list'
import { Li } from './components/list-item'
import { Query } from 'react-apollo'
import { GET_LANGUAGE_QUERY } from './utils/queriesAndMutations'
import { TrackPageViews } from './TrackPageViews'
import { Counters } from './counters'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

export const Th1P1 = () => (
  <Query query={GET_LANGUAGE_QUERY}>
    {({ data: { language } }) => (
      <CenterContent>
        <TrackPageViews />
        <H1>
          <Trans>
            We are gathering information on phone numbers, website URLs and
            email addresses
          </Trans>
        </H1>
        <H2 fontSize={[3, null, 4]}>
          <Trans>To learn more about the tools used to commit cybercrime</Trans>
        </H2>
        <P>
          <Trans>It takes 1 step to provide an inscure identifier.</Trans>
        </P>

        <P mt={6}>
          <Link fontSize={[3, null, 4]} lineHeight={[3, null, 4]} to={'form1'}>
            <Trans>Submit an identifier</Trans>
          </Link>
        </P>

        <Counters />
      </CenterContent>
    )}
  </Query>
)
