import { Route } from 'react-router-dom'
import React from 'react'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { Layout } from './components/layout'
import { MoneyLostInfoForm } from './forms/MoneyLostInfoForm'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'
import {
  updateNavigation,
  whatWasAffectedPages,
} from './utils/nextWhatWasAffectedUrl'
import { Page } from './components/Page'
import { useLog } from './useLog'

export const MoneyLostPage = () => {
  const [state, dispatch] = useStateValue()
  const { doneForms } = state
  const whatWasAffectedNavState = state.whatWasAffectedOptions

  whatWasAffectedNavState.currentPage = whatWasAffectedPages.FINANCIAL
  updateNavigation(doneForms, whatWasAffectedNavState)

  useLog('MoneyLostPage')

  return (
    <Route
      render={({ history }) => (
        <Page>
          <Layout columns={{ base: 4 / 4, md: 6 / 8, lg: 7 / 12 }}>
            <Stack spacing={10} shouldWrapChildren>
              <BackButton />
              <H1>
                <Trans id="moneyLostPage.title" />
              </H1>
              <Stack spacing={4}>
                <P>
                  <Trans id="moneyLostPage.intro" />
                </P>
              </Stack>
              <MoneyLostInfoForm
                nextpageText={
                  whatWasAffectedNavState.nextPage.nextPageTextInPreviousPage
                }
                onSubmit={(data) => {
                  dispatch({
                    type: 'saveFormData',
                    data: { moneyLost: data },
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
