import { Route } from 'react-router-dom'
import React from 'react'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { Lead } from './components/paragraph'
import { Layout } from './components/layout'
import { WhatWasAffectedForm } from './forms/WhatWasAffectedForm'
import { TrackPageViews } from './TrackPageViews'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'
import { nextWhatWasAffectedUrl } from './utils/nextWhatWasAffectedUrl'
import { Steps } from './components/stepper'

export const WhatWasAffectedPage = () => {
  const [data, dispatch] = useStateValue()
  const { doneForms } = data

  return (
    <Route
      render={({ history }) => (
        <Layout>
          <TrackPageViews />
          <Stack spacing={10} shouldWrapChildren>
            <BackButton route="/howdiditstart">
              <Trans id="whatWasAffectedPage.backButton" />
            </BackButton>
            <Steps activeStep={2} totalSteps={8} />
            <Stack spacing={4} role="heading" aria-level="1">
              <H1 as="span">
                <Trans id="whatWasAffectedPage.title" />
              </H1>
            </Stack>
            <Lead>
              <Trans id="whatWasAffectedPage.intro" />
            </Lead>

            <WhatWasAffectedForm
              onSubmit={data => {
                dispatch({
                  type: 'saveFormData',
                  data: { whatWasAffected: data },
                })
                history.push(
                  doneForms
                    ? '/confirmation'
                    : nextWhatWasAffectedUrl(
                        data.affectedOptions,
                        'whatwasaffected',
                      ),
                )
              }}
            />
          </Stack>
        </Layout>
      )}
    />
  )
}
