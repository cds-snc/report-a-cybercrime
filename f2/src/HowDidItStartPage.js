/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { TrackPageViews } from './TrackPageViews'
import { HowDidItStartForm } from './forms/HowDidItStartForm'
import { Layout } from './components/layout'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'

export const HowDidItStartPage = () => {
  const [data, dispatch] = useStateValue()
  const { doneForms } = data

  return (
    <Route
      render={({ history }) => (
        <Layout>
          <TrackPageViews />
          <Stack spacing={10} shouldWrapChildren>
            <BackButton route="/privacyandconsent">
              <Trans id="howDidItStartPage.backButton" />
            </BackButton>

            <Stack spacing={4} role="heading" aria-level="1">
              <H1 as="span">
                <Trans id="howDidItStartPage.title" />
              </H1>
            </Stack>
            <Stack spacing={4}>
              <P>
                <Trans id="howDidItStartPage.intro" />
              </P>
            </Stack>

            <HowDidItStartForm
              onSubmit={data => {
                dispatch({ type: 'saveFormData', data: { howdiditstart: data } })
                history.push(doneForms ? '/privacyconsent' : '/whatwasaffected')
              }}
            />
          </Stack>
        </Layout>
      )}
    />
  )
}
