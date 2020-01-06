/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { TrackPageViews } from './TrackPageViews'
import { ContactInfoForm } from './forms/ContactInfoForm'
import { Layout } from './components/layout'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'

export const ContactInfoPage = () => {
  const [, dispatch] = useStateValue()

  return (
    <Route
      render={({ history }) => (
        <Layout>
          <TrackPageViews />
          <Stack spacing={10} shouldWrapChildren>
            <BackButton route="/impact">
              <Trans id="contactinfoPage.backButton" />
            </BackButton>

            <Stack spacing={4} role="heading" aria-level="1">
              <H1 as="span">
                <Trans id="contactinfoPage.title" />
              </H1>
            </Stack>

            <P>
              <Trans id="contactinfoPage.intro" />
            </P>

            <ContactInfoForm
              onSubmit={data => {
                dispatch({ type: 'saveFormData', data: { contactInfo: data } })
                history.push('/confirmation')
              }}
            />
          </Stack>
        </Layout>
      )}
    />
  )
}
