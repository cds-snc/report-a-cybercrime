/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { InformationForm } from './forms/InformationForm'
import { Layout } from './components/layout'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'
import {
  updateNavigation,
  whatWasAffectedPages,
} from './utils/nextWhatWasAffectedUrl'
import { Page } from './components/Page'
import { editCheck } from './utils/flagFieldEdited'
import { useLog } from './useLog'

export const InformationPage = () => {
  const [state, dispatch] = useStateValue()
  const { doneForms } = state
  const whatWasAffectedNavState = state.whatWasAffectedOptions

  whatWasAffectedNavState.currentPage = whatWasAffectedPages.INFORMATION
  updateNavigation(doneForms, whatWasAffectedNavState)

  useLog('InformationPage')

  return (
    <Route
      render={({ history }) => (
        <Page>
          <Layout columns={{ base: 4 / 4, md: 6 / 8, lg: 7 / 12 }}>
            <Stack spacing={10} shouldWrapChildren>
              <BackButton />
              <H1>
                <Trans id="informationPage.title" />
              </H1>
              <Stack spacing={4}>
                <P>
                  <Trans id="informationPage.intro" />
                </P>
              </Stack>

              <InformationForm
                nextpageText={
                  whatWasAffectedNavState.nextPage.nextPageTextInPreviousPage
                }
                onSubmit={(data) => {
                  editCheck(data, history)
                  dispatch({
                    type: 'saveFormData',
                    data: { personalInformation: data },
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
