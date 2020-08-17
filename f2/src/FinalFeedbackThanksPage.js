/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { TrackPageViews } from './TrackPageViews'
import { Layout } from './components/layout'
import { Stack, Box, Icon } from '@chakra-ui/core'
import { Alert } from './components/Messages'
import { Route } from 'react-router-dom'
import { Link } from './components/link'
import { MidFeedbackForm } from './forms/MidFeedbackForm'
import { submitToServer } from './utils/submitToServer'

export const FinalFeedbackThanksPage = () => {
  return (
    <Layout>
      <TrackPageViews />
      <Stack spacing={10} shouldWrapChildren>
        <H1>
          <Trans id="finalFeedbackThanks.title" />
        </H1>
        <Alert status="success" withIcon>
          <Trans id="thankYouPage.safelyCloseWindow" />
        </Alert>
        <Box mb="auto">
          <Route
            render={({ history }) => (
              <Link to="/">
                <Trans id="thankYouPage.createNewReport" />
              </Link>
            )}
          />
          <Icon
            color="blue"
            focusable="false"
            ml={2}
            mr={-2}
            name="chevron-right"
            size="24px"
          />
        </Box>
        <MidFeedbackForm
          onSubmit={(data) => {
            submitToServer(data)
          }}
        />
      </Stack>
    </Layout>
  )
}
