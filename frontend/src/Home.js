import React from 'react'
import { Router } from '@reach/router'
import { Trans } from '@lingui/macro'
import styled from '@emotion/styled'
import { PhaseBanner } from './components/phase-banner'
import { PageNotFound } from './PageNotFound'
import { FileUploadPage } from './FileUploadPage'
import { Suspectinfo } from './SuspectInfoYesNoPage'
import { ScamInfoPage } from './ScamInfoPage'
import { MoneyLostPage } from './MoneyLostPage'
import { ConfirmationPage } from './ConfirmationPage'
import { SuspectInfoPage } from './SuspectInfoPage'
import { ContactInfoPage } from './ContactInfoPage'
import { LoseMoney } from './MoneyLostYesNoPage'
import { ThankYou } from './ThankYou'
import { Willbecontacted } from './WillBeContactedYesNoPage'
import { LandingPage } from './LandingPage'
import { FilesToUpload } from './FileUploadYesNoPage'

const Root = styled('div')`
  margin: 20pt;
`
const Screen = styled('div')`
  margin-top: 30pt;
`
export const Home = () => (
  <Root>
    <PhaseBanner phase={<Trans>ALPHA</Trans>} phaseColor="purple">
      <Trans>This site will change as we test ideas.</Trans>
    </PhaseBanner>
    <Screen>
      <Router>
        <PageNotFound default />
        <LandingPage path="/" />
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
