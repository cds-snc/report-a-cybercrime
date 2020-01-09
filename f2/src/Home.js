import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import styled from '@emotion/styled'
import { PageNotFound } from './PageNotFound'
import { LandingPage } from './LandingPage'
import { ThankYouPage } from './ThankYouPage'
import { WhatHappenedPage } from './WhatHappenedPage'
import { ContactInfoPage } from './ContactInfoPage'
import { SuspectCluesPage } from './SuspectCluesPage'
import { ScammerDetailsPage } from './ScammerDetailsPage'
import { ConfirmationPage } from './ConfirmationPage'
import { NextSteps } from './NextSteps'
import { TimeFramePage } from './TimeFramePage'
import { ImpactStatementPage } from './ImpactStatementPage'
import { MoneyLostPage } from './MoneyLostPage'
import { BusinessPage } from './BusinessPage'
import { InformationPage } from './InformationPage'
import { LocationPage } from './LocationPage'
import { DevicesPage } from './DevicesPage'
import { PrivacyConsentPage } from './PrivacyConsentPage'
import { WhatWasAffectedPage } from './WhatWasAffected'


const Root = styled('div')`
  margin: 20pt;
`
const Screen = styled('div')`
  margin-top: 0;
`

export const Home = () => (
  <Root>
    <Screen>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/thankYouPage">
            <ThankYouPage />
          </Route>
          <Route path="/whathappened">
            <WhatHappenedPage />
          </Route>
          <Route path="/contactinfo">
            <ContactInfoPage />
          </Route>
          <Route path="/suspectCluesPage">
            <SuspectCluesPage />
          </Route>
          <Route path="/scammerdetails">
            <ScammerDetailsPage />
          </Route>
          <Route path="/confirmation">
            <ConfirmationPage />
          </Route>
          <Route path="/nextsteps">
            <NextSteps />
          </Route>
          <Route path="/timeframe">
            <TimeFramePage />
          </Route>
          <Route path="/impact">
            <ImpactStatementPage />
          </Route>
          <Route path="/moneylost">
            <MoneyLostPage />
          </Route>
          <Route path="/business">
            <BusinessPage />
          </Route>
          <Route path="/information">
            <InformationPage />
          </Route>
          <Route path="/location">
            <LocationPage />
          </Route>
          <Route path="/devices">
            <DevicesPage />
          </Route>
          <Route path="/privacyconsent">
            <PrivacyConsentPage />
          <Route path="/whatwasaffected">
            <WhatWasAffectedPage />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </Screen>
  </Root>
)
