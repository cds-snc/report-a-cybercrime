/* eslint-disable react/no-unescaped-entities */
import { navigate } from '@reach/router'
import React from 'react'
import { Trans } from '@lingui/macro'
import { H1, H4 } from '../components/header'
import { Layout } from '../components/layout'
import { TimeFrameInfoForm } from './forms/TimeFrameInfoForm'
import { TrackPageViews } from '../TrackPageViews'
import { getDoneForms } from '../utils/queriesAndMutations'
import { Container } from '../components/container'
import { Steps } from '../components/stepper'

const submitAndNavigate = (client, data) => {
  client.writeData({ data: { timeFrame: JSON.stringify(data) } })
  navigate(getDoneForms(client) ? 'confirmation' : 'whathappened')
}

export const TimeFramePage = () => (
  <Layout>
    <Container
      display="flex"
      width="90%"
      flexDirection="row"
      marginBottom="20px"
    >
      <Steps activeStep={0} steps={[{}, {}, {}, {}, {}, {}]} />
    </Container>
    <H1>
      <Trans>When did it happen?</Trans>
    </H1>
    <H4>
      <Trans>
        It’s okay if you don’t know exactly when the scam took place.
      </Trans>
    </H4>
    <TrackPageViews />
    <TimeFrameInfoForm onSubmit={submitAndNavigate} />
  </Layout>
)
