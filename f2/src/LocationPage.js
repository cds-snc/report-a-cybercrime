import { Route } from 'react-router-dom'
import React from 'react'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { Layout } from './components/layout'
import { LocationInfoForm } from './forms/LocationInfoForm'
import { TrackPageViews } from './TrackPageViews'
import { getDoneForms } from './utils/queriesAndMutations'
import { BackButton } from './components/backbutton'
import { Steps } from './components/stepper'
import { Stack } from '@chakra-ui/core'

export const LocationPage = () => (
    <Route
        render={({ history }) => (
            <Layout>
                <TrackPageViews />

                <Stack spacing={10} shouldWrapChildren>
                    <BackButton route="/">
                        <Trans id="locationPage.backButton" />
                    </BackButton>

                    <Stack spacing={4} role="heading" aria-level="1">
                        <Steps activeStep={1} totalSteps={6} />
                        <H1 as="span">
                            <Trans id="locationPage.title" />
                        </H1>
                    </Stack>

                    <P>
                        <Trans id="locationPage.intro" />
                    </P>

                    <LocationInfoForm
                        onSubmit={(client, data) => {
                            client.writeData({ data: { timeFrame: JSON.stringify(data) } })
                            history.push(
                                getDoneForms(client) ? '/confirmation' : '/whathappened',
                            )
                        }}
                    />
                </Stack>
            </Layout>
        )}
    />
)
