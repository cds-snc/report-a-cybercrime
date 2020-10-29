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
import { editCheck } from './utils/flagFieldEdited'

export const WhatWasAffectedPage = () => {
  const [data, dispatch] = useStateValue()
  const { doneForms } = data
  const whatWasAffectedNavState = data.whatWasAffectedOptions
  const originalSelection = data.formData.whatWasAffected.affectedOptions

  whatWasAffectedNavState.currentPage = whatWasAffectedPages.FIRST_PAGE

  if (doneForms) {
    whatWasAffectedNavState.editOptions = true
  }

  const updateSelection = (whatWasAffected) => {
    //Selections in order of checked, order the selections to keep page navigation consistent
    const orderedSelection = orderSelection(whatWasAffected)

    if (doneForms) {
      whatWasAffectedNavState.affectedOptions = orderedSelection.filter(
        (option) => !originalSelection.includes(option),
      )
    } else {
      whatWasAffectedNavState.affectedOptions = [...orderedSelection]
    }

    //Remove Other from selections as there is no page to display.
    if (
      whatWasAffectedNavState.affectedOptions.includes(
        whatWasAffectedPages.OTHER.key,
      )
    ) {
      const otherIndex = whatWasAffectedNavState.affectedOptions.indexOf(
        whatWasAffectedPages.OTHER.key,
      )
      whatWasAffectedNavState.affectedOptions.splice(otherIndex, 1)
    }

    whatWasAffectedNavState.nextPage = nextPage(
      whatWasAffectedNavState,
      doneForms,
    )
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
                  updateSelection(data.affectedOptions)
                  editCheck(data, history)
                  dispatch({
                    type: 'saveFormData',
                    data: { whatWasAffected: data },
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
