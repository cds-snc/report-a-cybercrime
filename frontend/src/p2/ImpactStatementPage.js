/* eslint-disable react/no-unescaped-entities */

import { navigate } from '@reach/router'
import React from 'react'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { P } from '../components/paragraph'
import { Layout } from '../components/layout'
import { Steps } from '../components/stepper'
import { ImpactStatementInfoForm } from './forms/ImpactStatementInfoForm'
import { TrackPageViews } from '../TrackPageViews'
import { getDoneForms } from '../utils/queriesAndMutations'
import { BackButton } from '../components/backbutton'

const submitAndNavigate = (client, data) => {
  client.writeData({ data: { impact: JSON.stringify(data) } })
  navigate(getDoneForms(client) ? 'confirmation' : 'contactinfo')
}

export const ImpactStatementPage = () => (
  <Layout>
    <BackButton route="/p2/scammerdetails">
      <Trans id="impactPage.backButton">the suspect</Trans>
    </BackButton>
    <Steps activeStep={4} totalSteps={6} />
    <H1>
      <Trans id="impactPage.title">Impact caused by the scam</Trans>
    </H1>
    <P>
      <Trans id="impactPage.intro">
        You're not the only one affected by this scam. Help protect others by
        telling us how the scam affected you.
      </Trans>
    </P>
    <TrackPageViews />
    <ImpactStatementInfoForm onSubmit={submitAndNavigate} />
  </Layout>
)
