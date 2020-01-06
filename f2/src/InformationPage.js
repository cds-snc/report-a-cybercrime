/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { InformationForm } from './forms/InformationForm'
import { TrackPageViews } from './TrackPageViews'
import { Layout } from './components/layout'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'

export const InformationPage = () => (
  <Route
    render={({ history }) => (
      <Layout>
        <TrackPageViews />
        <Stack spacing={10} shouldWrapChildren>
          <BackButton route="/impact">
            <Trans id="informationPage.backButton" />
          </BackButton>

          <Stack spacing={4} role="heading" aria-level="1">
            <H1 as="span">
              <Trans id="informationPage.title" />
            </H1>
          </Stack>

          <InformationForm
            onSubmit={(client, data) => {
              client.writeData({ data: { contactInfo: JSON.stringify(data) } })
              history.push('/confirmation')
            }}
          />
        </Stack>
      </Layout>
    )}
  />
)
