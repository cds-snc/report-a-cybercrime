import React from 'react'
import { Router } from '@reach/router'
import { Trans } from '@lingui/macro'
import styled from '@emotion/styled'
import { PhaseBanner } from './components/phase-banner'
import { PageNotFound } from './PageNotFound'

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
import { ScamInfoPage } from './ScamInfoPage'
import { MoneyLostPage } from './MoneyLostPage'
import { ConfirmationPage } from './ConfirmationPage'
import { SuspectInfoPage } from './SuspectInfoPage'
import { ContactInfoPage } from './ContactInfoPage'
import { LoseMoney } from './LoseMoney'
import { ThankYou } from './ThankYou'
import { Willbecontacted } from './Willbecontacted'
import { LandingPage } from './LandingPage'
import { FilesToUpload } from './FilesToUpload'

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
        <Option1Page path="/option1" />
        <Option2Page path="/option2" />
        <Option3Page path="/option3" />
        <HowToTellPolice path="/howtotell" />
        <Urgency path="/urgency" />
        <AmountOfInfoPage path="/amountofinfo" />
        <IdentityPage path="/identity" />

        <LandingPage path="/" />
        <Ifvictim path="/ifvictimquestion" />
        <ScamInfoPage path="/scaminfo" />
        <Suspectinfo path="/suspectinfoquestion" />
        <SuspectInfoPage path="/suspectinfo" />
        <LoseMoney path="/moneylostquestion" />
        <MoneyLostPage path="/moneylost" />
        <FilesToUpload path="/uploadfilesquestion" />
        <FileUploadPage path="/uploadfiles" />
        <Willbecontacted path="/contactinfoquestion" />
        <ContactInfoPage path="/contactinfo" />
        <ConfirmationPage path="/confirmation" />
        <ThankYou path="/thankyou" />
      </Router>
    </Screen>
  </Root>
)
