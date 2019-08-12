/* eslint-disable react/no-unescaped-entities */
import {jsx} from '@emotion/core'
import {navigate} from '@reach/router'
import React from 'react'
import { Trans } from '@lingui/macro'
import { P } from '../components/paragraph'
import { H2,H4 } from '../components/header'
import { ButtonLink } from '../components/link'
import { Container } from '../components/container'
import { Layout } from '../components/layout'
import { TimeFrameInfoForm} from './forms/TimeFrameInfoForm'
import { TrackPageViews } from '../TrackPageViews'
import {getDoneForms} from '../utils/queriesAndMutations'
import { BREAKPOINTS } from '../theme';

const submitAndNavigate = (client, data) => {
    client.writeData({ data: { scamInfo: JSON.stringify(data) } })
    navigate(getDoneForms(client) ? 'confirmation' : 'moneylostquestion')
  }

export const TimeFramePage  = () => (
  <Layout>
      
    {/* <Container
      display="flex"
      width="90%"
      flexDirection="row"
      marginBottom="20px"
    >
      <Steps activeStep={1} steps={[{}, {}, {}, {}, {}]} />
    </Container> */}
    <H2>Set the time frame</H2>
    <P  >
        <Trans>Let’s start at the beginning.</Trans> </P>
    
    <p>

      <Trans>Tell police  when this took place.</Trans>
    </p>
    
    
    <TrackPageViews />
    <TimeFrameInfoForm onSubmit={submitAndNavigate} />

    
  </Layout>
)

