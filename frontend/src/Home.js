import React from 'react'
import { Router } from '@reach/router'
import { Trans } from '@lingui/macro'
import styled from '@emotion/styled'
import { PhaseBanner } from './components/phase-banner'
import { LandingPage } from './LandingPage'
import { NewLandingPage } from './NewLandingPage'
import { Screen1 } from './Screen1'
import { Screen2 } from './Screen2'
import { Screen3 } from './Screen3'
import { Thanks } from './Thanks'
import { PageNotFound } from './PageNotFound'
import { Page1 } from './Page1'
import { Page2 } from './Page2'

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
        This site will be changing as we test ideas and learn from people like
        you.
      </Trans>
    </PhaseBanner>
    <Screen>
      <Router>
        <PageNotFound default />
        <Page1 path="/" />
        <Page2 path="/Page2" />
        <NewLandingPage path="/landingpage" />
        <LandingPage path="/old" />
        <Screen1 path="/old/form1" />
        <Screen2 path="/old/form2" />
        <Screen3 path="/old/form3" />
        <Thanks path="/old/thanks" />
      </Router>
    </Screen>
  </Root>
)
