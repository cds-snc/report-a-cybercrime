import { Route } from 'react-router-dom'
import React from 'react'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { Layout } from './components/layout'
import { DevicesForm } from './forms/DevicesForm'
import { TrackPageViews } from './TrackPageViews'
import { getDoneForms } from './utils/queriesAndMutations'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'

export const DevicesPage = () => (
    <Route
        render={({ history }) => (
            <Layout>
                <TrackPageViews />

                <Stack spacing={10} shouldWrapChildren>
                    <BackButton route="/">
                        <Trans id="devicePage.backButton" />
                    </BackButton>

                    <Stack spacing={4} role="heading" aria-level="1">
                        <H1 as="span">
                            <Trans id="devicePage.title" />
                        </H1>
                    </Stack>

                    <DevicesForm
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
