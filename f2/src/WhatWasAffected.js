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
import {
  nextPage,
  whatWasAffectedPages,
  orderSelection,
} from './utils/nextWhatWasAffectedUrl'
import { Page } from './components/Page'

export const WhatWasAffectedPage = () => {
  const [data, dispatch] = useStateValue()
  const { doneForms } = data
  const pages = data.whatWasAffectedOptions
  const originalSelection = data.formData.whatWasAffected.affectedOptions

  pages.currentPage = whatWasAffectedPages.FIRST_PAGE

  if (doneForms) {
    pages.lastPage = whatWasAffectedPages.CONFIRMATION
    pages.editOptions = true
  }

  const updateSelection = (whatWasAffected) => {
    //Selections in order of checked, order the selections to keep page navigation consistent
    const orderedSelection = orderSelection(whatWasAffected)

    if (doneForms) {
      pages.affectedOptions = orderedSelection.filter(
        (option) => !originalSelection.includes(option),
      )
    } else {
      pages.affectedOptions = [...orderedSelection]
    }

    //Remove Other from selections as there is no page to display.
    if (pages.affectedOptions.includes(whatWasAffectedPages.OTHER.key)) {
      const otherIndex = pages.affectedOptions.indexOf(
        whatWasAffectedPages.OTHER.key,
      )
      pages.affectedOptions.splice(otherIndex, 1)
    }

    pages.nextPage = nextPage(pages)

    dispatch({
      type: 'saveWhatWasAffectedOptions',
      data: pages,
    })
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
                onSubmit={async (data) => {
                  await updateSelection(data.affectedOptions)

                  dispatch({
                    type: 'saveFormData',
                    data: { whatWasAffected: data },
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
