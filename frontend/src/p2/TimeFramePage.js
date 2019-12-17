import { navigate } from '@reach/router'
import React from 'react'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { P } from '../components/paragraph'
import { Layout } from '../components/layout'
import { TimeFrameInfoForm } from './forms/TimeFrameInfoForm'
import { TrackPageViews } from '../TrackPageViews'
import { getDoneForms } from '../utils/queriesAndMutations'
import { BackButton } from '../components/backbutton'
import { Steps } from '../components/stepper'

const submitAndNavigate = (client, data) => {
  client.writeData({ data: { timeFrame: JSON.stringify(data) } })
  navigate(getDoneForms(client) ? 'confirmation' : 'whathappened')
}

export const TimeFramePage = () => (
  <Layout>
    <BackButton route="/p2">
      <Trans id="timeFramePage.backButton">the start page</Trans>
    </BackButton>
    <Steps activeStep={1} totalSteps={6} />

    <H1>
      <Trans id="timeFramePage.title">When did the scam happen?</Trans>
    </H1>
    <P>
      <Trans id="timeFramePage.intro">
        It’s okay if you don’t know exactly when it took place. You can give
        your best guess or leave this blank.
      </Trans>
    </P>
    <TrackPageViews />
    <TimeFrameInfoForm onSubmit={submitAndNavigate} />
  </Layout>
)