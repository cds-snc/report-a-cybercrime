/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { InformationForm } from './forms/InformationForm'
import { TrackPageViews } from './TrackPageViews'
import { Layout } from './components/layout'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'
import { nextWhatWasAffectedUrl } from './utils/nextWhatWasAffectedUrl'

export const InformationPage = () => {
  const [state, dispatch] = useStateValue()
  const { doneForms, formData } = state
  const affectedOptions = formData.whatWasAffected
    ? formData.whatWasAffected.affectedOptions
    : []

  return (
    <Route
      render={({ history }) => (
        <Layout>
          <TrackPageViews />
          <Stack spacing={10} shouldWrapChildren>
            <BackButton route="/whatwasaffected">
              <Trans id="informationPage.backButton" />
            </BackButton>

            <Stack spacing={4} role="heading" aria-level="1">
              <H1 as="span">
                <Trans id="informationPage.title" />
              </H1>
            </Stack>
            <Stack spacing={4}>
              <P>
                <Trans id="informationPage.intro" />
              </P>
            </Stack>

            <InformationForm
              onSubmit={data => {
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
      )}
    />
  )
}
