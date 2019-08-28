/* eslint-disable react/no-unescaped-entities */

import { navigate } from '@reach/router'
import React from 'react'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { P } from '../components/paragraph'
import { Layout } from '../components/layout'
import { Container } from '../components/container'
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
    <Container
      display="flex"
      width="90%"
      flexDirection="row"
      marginBottom="20px"
    >
      <Steps activeStep={3} steps={[{}, {}, {}, {}, {}, {}]} />
    </Container>
    <BackButton route="/p2/scammerdetails" />

    <H1>
      <Trans>Impact caused by the scam</Trans>
    </H1>
    <P>
      <Trans>
        You are not alone. Tell us how you were impacted so that others don't
        have to go through the same thing.
      </Trans>
    </P>

    <TrackPageViews />
    <ImpactStatementInfoForm onSubmit={submitAndNavigate} />
  </Layout>
)
