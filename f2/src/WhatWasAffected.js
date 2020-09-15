import { Route } from 'react-router-dom'
import React from 'react'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { Lead } from './components/paragraph'
import { Layout } from './components/layout'
import { WhatWasAffectedForm } from './forms/WhatWasAffectedForm'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'
import { nextWhatWasAffectedUrl } from './utils/nextWhatWasAffectedUrl'
import { Page } from './components/Page'

export const WhatWasAffectedPage = () => {
  const [data, dispatch] = useStateValue()
  const { doneForms } = data
  const orignalSelection = data.formData.whatWasAffected.affectedOptions
  const pages = {
    firstPage: '/whatwasaffected',
    lastPage: '/whathappened',
    affectedOptions: [],
  }

  const updateSelection = (whatWasAffected) => {
    if (doneForms) {
      pages.affectedOptions = whatWasAffected.filter(
        (option) => !orignalSelection.includes(option),
      )
      lastPage = '/confirmation'
    } else {
      pages.affectedOptions = whatWasAffected
    }

    dispatch({
      type: 'saveWhatWasAffectedOptions',
      data: pages,
    })

    return pages
  }

  return (
    <Route
      render={({ history }) => (
        <Page>
          <Layout columns={{ base: 4 / 4, md: 6 / 8, lg: 7 / 12 }}>
            <Stack spacing={10} shouldWrapChildren>
              <BackButton />

              <H1>
                <Trans id="whatWasAffectedPage.title" />
              </H1>

              <Lead>
                <Trans id="whatWasAffectedPage.intro" />
              </Lead>

              <WhatWasAffectedForm
                onSubmit={(data) => {
                  const nextPages = updateSelection(data.affectedOptions)
                  const pageNavigation = nextWhatWasAffectedUrl(
                    nextPages,
                    'whatwasaffected',
                  )

                  dispatch({
                    type: 'saveFormData',
                    data: { whatWasAffected: data },
                  })
                  history.push(pageNavigation)
                }}
              />
            </Stack>
          </Layout>
        </Page>
      )}
    />
  )
}
