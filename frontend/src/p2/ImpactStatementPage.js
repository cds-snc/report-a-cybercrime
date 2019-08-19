/* eslint-disable react/no-unescaped-entities */

import { navigate } from '@reach/router'
import React from 'react'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { P } from '../components/paragraph'
import { Layout } from '../components/layout'
import { ImpactStatementInfoForm } from './forms/ImpactStatementInfoForm'
import { TrackPageViews } from '../TrackPageViews'
import { getDoneForms } from '../utils/queriesAndMutations'

const submitAndNavigate = (client, data) => {
  client.writeData({ data: { impact: JSON.stringify(data) } })
  navigate(getDoneForms(client) ? 'confirmation' : 'contactinfo')
}

export const ImpactStatementPage = () => (
  <Layout>
    <H1>
      <Trans>Impact caused by the scam</Trans>
    </H1>
    <P>
      <Trans>
        What happened is not okay. You are doing the right thing by reporting.
        You are helping others not have to go through the same thing in the
        future.
      </Trans>
    </P>

    <TrackPageViews />
    <ImpactStatementInfoForm onSubmit={submitAndNavigate} />
  </Layout>
)
