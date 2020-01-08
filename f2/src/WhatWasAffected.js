/* eslint-disable react/no-unescaped-entities */

import { Route } from 'react-router-dom'
import React from 'react'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { Layout } from './components/layout'
import { WhatWasAffectedForm } from './forms/WhatWasAffectedForm'
import { TrackPageViews } from './TrackPageViews'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'

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

            <Stack spacing={4} role="heading" aria-level="1">
              <H1 as="span">
                <Trans id="whatWasAffectedPage.title" />
              </H1>
            </Stack>

            <P>
              <Trans id="whatWasAffectedPage.intro" />
            </P>

            <WhatWasAffectedForm
              onSubmit={data => {
                dispatch({
                  type: 'saveFormData',
                  data: { whatWasAffected: data },
                })
                history.push(doneForms ? '/confirmation' : '/contactinfo')
              }}
            />
          </Stack>
        </Layout>
      )}
    />
  )
}
