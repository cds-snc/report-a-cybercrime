/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { TrackPageViews } from './TrackPageViews'
import { BusinessInfoForm } from './forms/BusinessInfoForm'
import { Layout } from './components/layout'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'

export const BusinessPage = () => {
    const [data, dispatch] = useStateValue()
    const { doneForms } = data
    return (
        < Route
            render={({ history }) => (
                <Layout>
                    <TrackPageViews />
                    <Stack spacing={10} shouldWrapChildren>
                        <BackButton route="/impact">
                            <Trans id="businessInfoPage.backButton" />
                        </BackButton>

                        <Stack spacing={4} role="heading" aria-level="1">
                            <H1 as="span">
                                <Trans id="businessPage.title" />
                            </H1>
                        </Stack>
                        <BusinessInfoForm
                            onSubmit={data => {
                                dispatch({ type: 'saveFormData', data: { business: data } })
                                history.push(doneForms ? '/confirmation' : '/whathappened')
                            }}
                        />
                    </Stack>
                </Layout>
            )}
        />
    )
}
