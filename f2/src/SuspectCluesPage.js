/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { Lead } from './components/paragraph'
import { SuspectCluesForm } from './forms/SuspectCluesForm'
import { Layout } from './components/layout'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'
import { Page } from './components/Page'

export const SuspectCluesPage = () => {
  const [data, dispatch] = useStateValue()
  const { doneForms } = data

  return (
    <Route
      render={({ history }) => (
        <Page>
          <Layout columns={{ base: 4 / 4, md: 6 / 8, lg: 7 / 12 }}>
            <Stack spacing={10} shouldWrapChildren>
              <BackButton></BackButton>
              <H1>
                <Trans id="suspectClues.title" />
              </H1>
              <Stack spacing={4}>
                <Lead>
                  <Trans id="suspectClues.intro" />
                </Lead>
              </Stack>

              <SuspectCluesForm
                onSubmit={data => {
                  dispatch({
                    type: 'saveFormData',
                    data: { suspectClues: data },
                  })
                  history.push(doneForms ? '/confirmation' : '/evidence')
                }}
              />
            </Stack>
          </Layout>
        </Page>
      )}
    />
  )
}
