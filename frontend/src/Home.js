import React from 'react'
import { Router } from '@reach/router'
import { Trans } from '@lingui/macro'
import { css } from 'emotion'
import PhaseBanner from '@govuk-react/phase-banner'
import { LandingPage } from './LandingPage'
import { Screen1 } from './Screen1'
import { Screen2 } from './Screen2'
import { Screen3 } from './Screen3'
import { Thanks } from './thanks'

const root = css`
  margin: 20pt;
`

const screen = css`
  margin-top: 30pt;
`

const Home = () => (
  <div className={root}>
    <PhaseBanner level="discovery">
      <Trans>For research purposes only.</Trans>
    </PhaseBanner>

    <div className={screen}>
      <Router>
        <LandingPage path="/" />
        <Screen1 path="form1" />
        <Screen2 path="form2" />
        <Screen3 path="form3" />
        <Thanks path="thanks" />
      </Router>
    </div>
  </div>
)

export default Home
