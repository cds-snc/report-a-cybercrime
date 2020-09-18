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
import { nextPage, whatWasAffectedPages } from './utils/nextWhatWasAffectedUrl'
import { Page } from './components/Page'

export const DevicesPage = () => {
  const [state, dispatch] = useStateValue()
  const { doneForms } = state
  const pages = state.whatWasAffectedOptions

  pages.currentPage = whatWasAffectedPages.DEVICES

  if (doneForms) {
    pages.lastPage = whatWasAffectedPages.CONFIRMATION
  }

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
                onSubmit={async (data) => {
                  if (doneForms && !pages.editOptions) {
                    pages.nextPage = whatWasAffectedPages.CONFIRMATION
                  } else {
                    pages.nextPage = await nextPage(pages)
                  }

                  if (pages.nextPage === whatWasAffectedPages.CONFIRMATION) {
                    pages.editOptions = false
                  }

                  dispatch({
                    type: 'saveWhatWasAffectedOptions',
                    data: pages,
                  })

                  dispatch({
                    type: 'saveFormData',
                    data: { devicesInfo: data },
                  })

                  history.push(pages.nextPage.url)
                }}
              />
            </Stack>
          </Layout>
        </Page>
      )}
    />
  )
}
