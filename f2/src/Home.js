import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { PageNotFound } from './PageNotFound'
import { LandingPage } from './LandingPage'
import { WhatHappenedPage } from './WhatHappenedPage'
import { ContactInfoPage } from './ContactInfoPage'
import { ScammerDetailsPage } from './ScammerDetailsPage'
import { ConfirmationPage } from './ConfirmationPage'
import { NextSteps } from './NextSteps'
import { TimeFramePage } from './TimeFramePage'
import { ImpactStatementPage } from './ImpactStatementPage'
import { BusinessPage } from './BusinessPage'
import { InformationPage } from './InformationPage'
import { LocationPage } from './LocationPage'
import { DevicesPage } from './DevicesPage'

export const Home = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/whathappened">
        <WhatHappenedPage />
      </Route>
      <Route path="/contactinfo">
        <ContactInfoPage />
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
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  </Router>
)
