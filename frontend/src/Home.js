import React from 'react'
import { Router } from '@reach/router'
import { Trans } from '@lingui/macro'
import styled from '@emotion/styled'
import { PhaseBanner } from './components/phase-banner'
import { PageNotFound } from './PageNotFound'
import { RootLandingPage } from './RootLandingPage'
import { FileUploadPage } from './p1/FileUploadPage'
import { Suspectinfo } from './p1/SuspectInfoYesNoPage'
import { ScamInfoPage } from './p1/ScamInfoPage'
import { MoneyLostPage } from './p1/MoneyLostPage'
import { ConfirmationPage } from './p1/ConfirmationPage'
import { SuspectInfoPage } from './p1/SuspectInfoPage'
import { ContactInfoPage } from './p1/ContactInfoPage'
import { LoseMoney } from './p1/MoneyLostYesNoPage'
import { ThankYou } from './p1/ThankYou'
import { Willbecontacted } from './p1/WillBeContactedYesNoPage'
import { LandingPage } from './p1/LandingPage'
import { FilesToUpload } from './p1/FileUploadYesNoPage'
import { LandingPage as P2LandingPage } from './p2/LandingPage'
import { WhatHappenedPage as P2WhatHappenedPage } from './p2/WhatHappenedPage'
import {TimeFramePage as P2TimeFramePage} from './p2/TimeFramePage'


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
        <RootLandingPage path="/" />

        <LandingPage path="/p1" />
        <ScamInfoPage path="/p1/scaminfo" />
        <Suspectinfo path="/p1/suspectinfoquestion" />
        <SuspectInfoPage path="/p1/suspectinfo" />
        <LoseMoney path="/p1/moneylostquestion" />
        <MoneyLostPage path="/p1/moneylost" />
        <FilesToUpload path="/p1/uploadfilesquestion" />
        <FileUploadPage path="/p1/uploadfiles" />
        <Willbecontacted path="/p1/contactinfoquestion" />
        <ContactInfoPage path="/p1/contactinfo" />
        <ConfirmationPage path="/p1/confirmation" />
        <ThankYou path="/p1/thankyou" />
        <P2LandingPage path="/p2" />
        <P2WhatHappenedPage path="/p2/whatHappened" />
        

        <P2TimeFramePage path="/p2/timeframe" />

      </Router>
    </Screen>
  </Root>
)
