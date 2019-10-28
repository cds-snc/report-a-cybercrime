import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import styled from '@emotion/styled'
import { PageNotFound } from './PageNotFound'
import { LandingPage as P2LandingPage } from './p2/LandingPage'
import { WhatHappenedPage as P2WhatHappenedPage } from './p2/WhatHappenedPage'
import { ContactInfoPage as P2ContactInfoPage } from './p2/ContactInfoPage'
import { ScammerDetailsPage as P2ScammerDetailsPage } from './p2/ScammerDetailsPage'
import { ConfirmationPage as P2ConfirmationPage } from './p2/ConfirmationPage'
import { NextSteps as P2NextSteps } from './p2/NextSteps'
import { TimeFramePage as P2TimeFramePage } from './p2/TimeFramePage'
import { ImpactStatementPage as P2ImpactStatementPage } from './p2/ImpactStatementPage'

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
            <P2LandingPage />
          </Route>
          <Route path="/whathappened">
            <P2WhatHappenedPage />
          </Route>
          <Route path="/contactinfo">
            <P2ContactInfoPage />
          </Route>
          <Route path="/scammerdetails">
            <P2ScammerDetailsPage />
          </Route>
          <Route path="/confirmation">
            <P2ConfirmationPage />
          </Route>
          <Route path="/nextsteps">
            <P2NextSteps />
          </Route>
          <Route path="/timeframe">
            <P2TimeFramePage />
          </Route>
          <Route path="/impact">
            <P2ImpactStatementPage />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </Screen>
  </Root>
)
