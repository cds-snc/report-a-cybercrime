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
import { nextWhatWasAffectedUrl } from './utils/nextWhatWasAffectedUrl'
import { Page } from './components/Page'
import { useHistory } from 'react-router-dom'

export const InformationPage = () => {
  const [state, dispatch] = useStateValue()
  const { doneForms, formData } = state
  const affectedOptions = formData.whatWasAffected
    ? formData.whatWasAffected.affectedOptions
    : []
  const history = useHistory()
  if (state.formData.consent.consentOptions.length === 0) {
    history.push('/privacyconsent')
  }

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
                onSubmit={(data) => {
                  dispatch({
                    type: 'saveFormData',
                    data: { personalInformation: data },
                  })
                  history.push(
                    doneForms
                      ? '/confirmation'
                      : nextWhatWasAffectedUrl(affectedOptions, 'information'),
                  )
                }}
              />
            </Stack>
          </Layout>
        </Page>
      )}
    />
  )
}
