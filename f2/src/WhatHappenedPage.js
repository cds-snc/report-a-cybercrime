/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { TrackPageViews } from './TrackPageViews'
import { WhatHappenedForm } from './forms/WhatHappenedForm'
import { Layout } from './components/layout'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'

export const WhatHappenedPage = () => {
  const [data, dispatch] = useStateValue()
  const { doneForms } = data

  return (
    <Route
      render={({ history }) => (
        <Layout>
          <TrackPageViews />
          <Stack spacing={10} shouldWrapChildren>

            <BackButton route="/timeframe">
              <Trans id="whatHappenedPage.backButton" />

            </BackButton>

            <Stack spacing={4} role="heading" aria-level="1">
              <H1 as="span">
                <Trans id="whatHappenedPage.title" />
              </H1>
            </Stack>
            <Stack spacing={4}>
              <P>
                <Trans id="whatHappenedPage.intro1" />
              </P>
    
            </Stack>

            <WhatHappenedForm
              onSubmit={data => {
                dispatch({ type: 'saveFormData', data: { whatHappened: data } })
                history.push(doneForms ? '/confirmation' : '/suspectCluesPage')
              }}
            />
          </Stack>
        </Layout>
      )}
    />
  )
}
