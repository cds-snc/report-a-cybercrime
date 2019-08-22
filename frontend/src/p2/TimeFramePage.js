import { navigate } from '@reach/router'
import React from 'react'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { P } from '../components/paragraph'
import { Layout } from '../components/layout'
import { TimeFrameInfoForm } from './forms/TimeFrameInfoForm'
import { TrackPageViews } from '../TrackPageViews'
import { getDoneForms } from '../utils/queriesAndMutations'
import { Container } from '../components/container'
import { BackButton } from '../components/backbutton'
import { Steps } from '../components/stepper'

const submitAndNavigate = (client, data) => {
  client.writeData({ data: { scamInfo: JSON.stringify(data) } })
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

    <BackButton route="/p2" />

    {/* <Link type="button" color="black" to="/p2/" textAlign="center">
                <Trans>Cancel report</Trans>
              </Link> */}

    <H1>
      <Trans>When did it happen?</Trans>
    </H1>
    <P>
      <Trans>
        It’s okay if you don’t know exactly when the scam took place. Give your
        best guess.
      </Trans>
    </P>
    <TrackPageViews />
    <TimeFrameInfoForm onSubmit={submitAndNavigate} />
  </Layout>
)
