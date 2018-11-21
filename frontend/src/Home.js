import React from 'react'
import { Router } from '@reach/router'
import { Trans } from '@lingui/macro'
import { css } from 'emotion'
import PhaseBanner from '@govuk-react/phase-banner'
import { ReportScreen } from './report_screen'
import { LandingPage } from './LandingPage'
import { Screen1 } from './screen1'
const root = css`
  margin: 20pt;
`

const screen = css`
  margin-top: 30pt;
`

const Home = () => (
  <div className={root}>
    <PhaseBanner level="alpha">
      <Trans>For internal use only</Trans>
    </PhaseBanner>

    <div className={screen}>
      <Router>
        <LandingPage path="/" />
        <Screen1 path="form1" />
        <ReportScreen path="test" />
      </Router>
    </div>
  </div>
)

export default Home
