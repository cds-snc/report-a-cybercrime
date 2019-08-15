/* eslint-disable react/no-unescaped-entities */

import {navigate} from '@reach/router'
import React from 'react'
import { Trans } from '@lingui/macro'
import { H3,H1} from '../components/header'
import { p } from '../components/paragraph'
import { Layout } from '../components/layout'
import { ImpactStatementInfoForm} from './forms/ImpactStatementInfoForm'
import { TrackPageViews } from '../TrackPageViews'
import {getDoneForms} from '../utils/queriesAndMutations'


const submitAndNavigate = (client, data) => {
    client.writeData({ data: { scamInfo: JSON.stringify(data) } })
    navigate(getDoneForms(client) ? 'confirmation' : 'moneylostquestion')
  }

export const ImpactStatementPage  = () => (
  <Layout>
      
    {/* <Container
      display="flex"
      width="90%"
      flexDirection="row"
      marginBottom="20px"
    >
      <Steps activeStep={1} steps={[{}, {}, {}, {}, {}]} />
    </Container> */}
    <H1> <Trans>Impact caused by the scam</Trans></H1>
    <p>
        <Trans>What happened is not okay. You are doing the right thing by reporting. 
        You are helping others not have to go through the same thing in the future.</Trans></p>
     <H3><Trans>What was affected?</Trans></H3> 
  
    <TrackPageViews />
    <ImpactStatementInfoForm onSubmit={submitAndNavigate} />

  </Layout>
)


