/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { Steps } from './components/stepper'
import { TrackPageViews } from './TrackPageViews'
import { BusinessForm } from './forms/BusinessForm'
import { Layout } from './components/layout'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'

export const BusinessPage = () => (
    <Route
        render={({ history }) => (
            <Layout>
                <TrackPageViews />
                <Stack spacing={10} shouldWrapChildren>
                    <BackButton route="/impact">
                        <Trans id="contactinfoPage.backButton" />
                    </BackButton>

                    <Stack spacing={4} role="heading" aria-level="1">
                        <Steps activeStep={5} totalSteps={6} />
                        <H1 as="span">
                            <Trans id="businessPage.title" />
                        </H1>
                    </Stack>

                    <BusinessForm
                        onSubmit={(client, data) => {
                            client.writeData({ data: { business: JSON.stringify(data) } })
                            history.push('/confirmation')
                        }}
                    />
                </Stack>
            </Layout>
        )}
    />
)
