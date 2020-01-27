/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { Lead } from './components/paragraph'
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
            <BackButton route="/location">
              <Trans id="contactinfoPage.backButton" />
            </BackButton>
              <H1 >
                <Trans id="contactinfoPage.title" />
              </H1>
            <Lead>
              <Trans id="contactinfoPage.intro" />
            </Lead>

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
