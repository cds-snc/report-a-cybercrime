/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { Lead } from './components/paragraph'
import { HowDidItStartForm } from './forms/HowDidItStartForm'
import { Layout } from './components/layout'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'
import { Page } from './components/Page'

export const HowDidItStartPage = () => {
  const [data, dispatch] = useStateValue()
  const { doneForms } = data

  return (
    <Route
      render={({ history }) => (
        <Page>
          <Layout columns={{ base: 4 / 4, md: 6 / 8, lg: 7 / 12 }}>
            <Stack spacing={10} shouldWrapChildren>
              <BackButton />
              <H1>
                <Trans id="howDidItStartPage.title" />
              </H1>
              <Stack spacing={4}>
                <Lead>
                  <Trans id="howDidItStartPage.intro" />
                </Lead>
              </Stack>

              <HowDidItStartForm
                onSubmit={(data) => {
                  dispatch({
                    type: 'saveFormData',
                    data: { howdiditstart: data },
                  })
                  history.push(doneForms ? '/confirmation' : '/whenDidItHappen')
                }}
              />
            </Stack>
          </Layout>
        </Page>
      )}
    />
  )
}
