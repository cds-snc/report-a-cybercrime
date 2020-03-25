import { Route } from 'react-router-dom'
import React from 'react'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { Lead } from './components/paragraph'
import { Layout } from './components/layout'
import { LocationAnonymousInfoForm } from './forms/LocationAnonymousInfoForm'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'
import { Page } from './components/Page'

export const LocationAnonymousPage = () => {
  const [data, dispatch] = useStateValue()
  const { doneForms } = data

  return (
    <Route
      render={({ history }) => (
        <Page>
          <Layout columns={{ base: 4 / 4, md: 6 / 8, lg: 7 / 12 }}>
            <Stack spacing={10} shouldWrapChildren>
              <BackButton />
              <H1>
                <Trans id="LocationAnonymousPage.title" />
              </H1>
              <Lead>
                <Trans id="LocationAnonymousPage.intro" />
              </Lead>

              <LocationAnonymousInfoForm
                onSubmit={data => {
                  dispatch({ type: 'saveFormData', data: { location: data } })
                  history.push(doneForms ? '/confirmation' : '/confirmation')
                }}
              />
            </Stack>
          </Layout>
        </Page>
      )}
    />
  )
}
