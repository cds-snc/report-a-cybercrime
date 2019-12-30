/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { Steps } from './components/stepper'
import { TrackPageViews } from './TrackPageViews'
import { WhatHappenedForm } from './forms/WhatHappenedForm'
import { Layout } from './components/layout'
import { getDoneForms } from './utils/queriesAndMutations'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'

export const WhatHappenedPage = () => (
  <Route
    render={({ history }) => (
      <Layout>
        <TrackPageViews />
        <Stack spacing={10} shouldWrapChildren>
          <BackButton route="/timeframe">
            <Trans id="whatHappendPage.backButton" />
          </BackButton>

          <Stack spacing={4} role="heading" aria-level="1">
            <Steps activeStep={2} totalSteps={6} />
            <H1 as="span">
              <Trans id="whatHappendPage.title" />
            </H1>
          </Stack>
          <Stack spacing={4}>
            <P>
              <Trans id="whatHappendPage.intro1" />
            </P>
          </Stack>

          <WhatHappenedForm
            onSubmit={(client, data) => {
              client.writeData({ data: { whatHappened: JSON.stringify(data) } })
              history.push(
                getDoneForms(client) ? '/confirmation' : '/scammerdetails',
              )
            }}
          />
        </Stack>
      </Layout>
    )}
  />
)
