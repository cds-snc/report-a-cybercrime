/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import { H1 } from '../../header'
import { Layout } from '../../layout'
import { BackButton } from '../../backbutton'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from '../../../utils/state'
import { Page } from '../../Page'
import { TestForm } from './TESTFORM'

export const TestPage = () => {
  const [state, dispatch] = useStateValue()
  const { doneForms } = state

  return (
    <Route
      render={({ history }) => (
        <Page>
          <Layout columns={{ base: 4 / 4, md: 6 / 8, lg: 7 / 12 }}>
            <Stack spacing={10} shouldWrapChildren>
              <BackButton />
              <H1>TEST PAGE</H1>
              <TestForm
                onSubmit={(data) => {
                  dispatch({
                    type: 'saveFormData',
                    data: data,
                  })
                  history.push('moneylost')
                }}
              />
            </Stack>
          </Layout>
        </Page>
      )}
    />
  )
}
