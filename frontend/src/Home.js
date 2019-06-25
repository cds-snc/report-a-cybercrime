import React from 'react'
import { Router } from '@reach/router'
import { Trans } from '@lingui/macro'
import styled from '@emotion/styled'
import { PhaseBanner } from './components/phase-banner'
import { PageNotFound } from './PageNotFound'
import { Page1 } from './Page1'
import { Urgency } from './Urgency'
import { FileUploadPage } from './FileUploadPage'
import { AmountOfInfoPage } from './amountOfInfoPage'
import { HowToTellPolice } from './HowToTellPolice'
import { IdentityPage } from './identityPage'
import { Option1Page } from './Option1Page'
import { Option2Page } from './Option2Page'
import { Option3Page } from './Option3Page'

import { Ifvictim } from './Ifvictim'
import { Suspectinfo } from './Suspectinfo'

import { DemoPage } from './DemoPage'
import { OtherFlowPage } from './OtherFlowPage'
import { MoneyLostPage } from './MoneyLostPage'
import { SuspectInfoPage } from './SuspectInfoPage'
import { ContactInfoPage } from './ContactInfoPage'
import { LoseMoney } from './LoseMoney'

const Root = styled('div')`
  margin: 20pt;
`

const Screen = styled('div')`
  margin-top: 30pt;
`
export const Home = () => (
  <Root>
    <PhaseBanner phase={<Trans>ALPHA</Trans>} phaseColor="purple">
      <Trans>
        Hello, This site will be changing as we test ideas and learn from people
        like you.
      </Trans>
    </PhaseBanner>
    <Screen>
      <Router>
        <PageNotFound default />
        <DemoPage path="/demo" />
        <Page1 path="/" />
        <Option1Page path="/option1" />
        <Option2Page path="/option2" />
        <Option3Page path="/option3" />
        <HowToTellPolice path="/howtotell" />
        <LoseMoney path="/losemoney" />
        <FileUploadPage path="/uploadfiles" />
        <Urgency path="/urgency" />
        <AmountOfInfoPage path="/amountofinfo" />
        <IdentityPage path="/identity" />

        <Ifvictim path="/ifvictim" />
        <Suspectinfo path="/Suspectinfo" />

        <OtherFlowPage path="/otherflow" />
        <MoneyLostPage path="/moneylost" />
        <SuspectInfoPage path="/suspectinfo" />
        <ContactInfoPage path="/contactinfo" />
      </Router>
    </Screen>
  </Root>
)
