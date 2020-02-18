/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { Link } from './components/link'
import { InfoCard } from './components/container'
import { TrackPageViews } from './TrackPageViews'
import { Layout } from './components/layout'
import { Stack, Alert, AlertIcon, Box } from '@chakra-ui/core'
import { Route } from 'react-router-dom'
import { Button } from './components/button'

export const CancelPage = () => {
  return (
    <Stack w="100%">
      <Layout>
        <Stack spacing={10} w="100%">
          <TrackPageViews />
          <InfoCard
            bg="red.400"
            rounded="none"
            color="black"
            border="0"
            borderBottom="3px"
            borderColor="red.700"
            maxW={{ lg: '80%', xl: '60%' }}
            z-index="10"
            position="relative"
            mb="auto"
          >
            <H1 mb={6}>
              <Trans id="cancelPage.title" />
            </H1>
            <Trans id="cancelPage.summary" />
          </InfoCard>

          <Box mb="auto">
            <Route
              render={({ history }) => (
                <Button
                  onClick={() => history.push('/')}
                  to="/"
                  w={{ base: '100%', md: 'auto' }}
                >
                  <Trans id="cancelPage.createNewReport" />
                </Button>
              )}
            />
          </Box>
        </Stack>
      </Layout>
      <Layout fluid borderBottom="4px" borderColor="blue.500" mt="auto">
        <Layout>
          <Alert status="info" variant="solid">
            <AlertIcon name="chat" mt={0} />
            <Link as={Route} to="/finalFeedback" color="white" display="block">
              <Trans id="thankYouPage.feedback" />
            </Link>
          </Alert>
        </Layout>
      </Layout>
    </Stack>
  )
}
