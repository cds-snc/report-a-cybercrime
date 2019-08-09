/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Trans } from '@lingui/macro'
import { P } from '../components/paragraph'
import { H1 } from '../components/header'
import { ButtonLink } from '../components/link'
import { Layout } from '../components/layout'
import { TimeFrameInfoForm} from './forms/TimeFrameInfoForm'
import { TrackPageViews } from '../TrackPageViews'

const submitAndNavigate = (client, data) => {
    client.writeData({ data: { timeframe: JSON.stringify(data) } })
    navigate(getDoneForms(client) ? 'whathappened' : 'landingpage')
  }

export const TimeFramePage = () => (
  <Layout>
      
    <Container
      display="flex"
      width="90%"
      flexDirection="row"
      marginBottom="20px"
    >
      <Steps activeStep={1} steps={[{}, {}, {}, {}, {}]} />
    </Container>

    
    <H1>
      <Trans>When did this event occur?</Trans>
    </H1>
    <P>
      <Trans>
        We are asking because time frame help us to track the suspect  in the future if the case
         become investigative.
      </Trans>
    </P>
    
    <TrackPageViews />
    <TimeFrameInfoForm onSubmit={submitAndNavigate} />

    <ButtonLink color="black" mb={[3, null, 5]} to="/p1/landingpage">
      <Trans>Continue</Trans>
    </ButtonLink>
  </Layout>
)

