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
        <NewLandingPage path="/" />
        <LandingPage path="/old" />
        <Screen1 path="form1" />
        <Screen2 path="form2" />
        <Screen3 path="form3" />
        <Thanks path="thanks" />
      </Router>
    </Screen>
  </Root>
)
