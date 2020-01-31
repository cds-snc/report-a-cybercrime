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

            <H1>
              <Trans id="whatWasAffectedPage.title" />
            </H1>

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
