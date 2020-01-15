/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { Lead } from './components/paragraph'
import { TrackPageViews } from './TrackPageViews'
import { SuspectCluesForm } from './forms/SuspectCluesForm'
import { Layout } from './components/layout'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'

export const SuspectCluesPage = () => {
  const [data, dispatch] = useStateValue()
  const { doneForms } = data

  return (
    <Route
      render={({ history }) => (
        <Layout>
          <TrackPageViews />

          <Stack spacing={10} shouldWrapChildren>
            <BackButton route="/whathappened">
              <Trans id="suspectClues.backButton" />
            </BackButton>

            <Stack spacing={4} role="heading" aria-level="1">
              <H1 as="span">
                <Trans id="suspectClues.title" />
              </H1>
            </Stack>

            <Stack spacing={4}>
              <Lead>
                <Trans id="suspectClues.intro" />
              </Lead>
            </Stack>

            <SuspectCluesForm
              onSubmit={data => {
                dispatch({ type: 'saveFormData', data: { suspectClues: data } })
                history.push(doneForms ? '/confirmation' : '/evidence')
              }}
            />
          </Stack>
        </Layout>
      )}
    />
  )
}
