/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { Lead } from './components/paragraph'
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
            <BackButton route="/privacyconsent">
              <Trans id="howDidItStartPage.backButton" />
            </BackButton>

            <Stack spacing={4} role="heading" aria-level="1">
              <H1 as="span">
                <Trans id="howDidItStartPage.title" />
              </H1>
            </Stack>
            <Stack spacing={4}>
              <Lead>
                <Trans id="howDidItStartPage.intro" />
              </Lead>
            </Stack>

            <HowDidItStartForm
              onSubmit={data => {
                dispatch({
                  type: 'saveFormData',
                  data: { howdiditstart: data },
                })
                history.push(doneForms ? '/confirmation' : '/whatwasaffected')
              }}
            />
          </Stack>
        </Layout>
      )}
    />
  )
}
