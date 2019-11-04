/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { Ul } from './components/unordered-list'
import { Li } from './components/list-item'
import { Steps } from './components/stepper'
import { TrackPageViews } from './TrackPageViews'
import { WhatHappenedForm } from './forms/WhatHappenedForm'
import { Layout } from './components/layout'
import { getDoneForms } from './utils/queriesAndMutations'
import { BackButton } from './components/backbutton'

export const WhatHappenedPage = () => (
  <Route
    render={({ history }) => (
      <Layout>
        <BackButton route="/timeframe">
          <Trans id="whatHappendPage.backButton" />
        </BackButton>
        <Steps activeStep={2} totalSteps={6} />
        <H1>
          <Trans id="whatHappendPage.title" />
        </H1>
        <P>
          <Trans id="whatHappendPage.intro1" />
        </P>
        <P>
          <Trans id="whatHappendPage.details1" />
        </P>
        <Ul>
          <Li>
            <Trans id="whatHappendPage.details2" />
          </Li>
          <Li>
            <Trans id="whatHappendPage.details3" />
          </Li>
          <Li>
            <Trans id="whatHappendPage.details4" />
          </Li>
        </Ul>
        <TrackPageViews />
        <WhatHappenedForm
          onSubmit={(client, data) => {
            client.writeData({ data: { whatHappened: JSON.stringify(data) } })
            history.push(
              getDoneForms(client) ? '/confirmation' : '/scammerdetails',
            )
          }}
        />
      </Layout>
    )}
  />
)
