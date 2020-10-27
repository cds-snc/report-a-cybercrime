import { Route } from 'react-router-dom'
import React from 'react'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { Layout } from './components/layout'
import { DevicesForm } from './forms/DevicesForm'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'
import { navigate, whatWasAffectedPages } from './utils/nextWhatWasAffectedUrl'
import { Page } from './components/Page'
import { useLog } from './useLog'

export const DevicesPage = () => {
  const [state, dispatch] = useStateValue()
  const { doneForms } = state
  const whatWasAffectedNavState = state.whatWasAffectedOptions

  whatWasAffectedNavState.currentPage = whatWasAffectedPages.DEVICES
  useLog('DevicesPage')

  return (
    <Route
      render={({ history }) => (
        <Page>
          <Layout columns={{ base: 4 / 4, md: 6 / 8, lg: 7 / 12 }}>
            <Stack spacing={10} shouldWrapChildren>
              <BackButton />
              <H1>
                <Trans id="devicePage.title" />
              </H1>
              <Stack spacing={4}>
                <P>
                  <Trans id="devicePage.intro" />
                </P>
              </Stack>

              <DevicesForm
                onSubmit={(data) => {
                  navigate(doneForms, whatWasAffectedNavState)

                  dispatch({
                    type: 'saveFormData',
                    data: { devicesInfo: data },
                  })

                  history.push(whatWasAffectedNavState.nextPage.url)
                }}
              />
            </Stack>
          </Layout>
        </Page>
      )}
    />
  )
}
