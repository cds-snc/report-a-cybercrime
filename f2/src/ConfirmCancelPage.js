/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { Layout } from './components/layout'
import { Stack, Flex } from '@chakra-ui/core'
import { Route } from 'react-router-dom'
import { P } from './components/paragraph'
import { Button } from './components/button'
import { useStateValue } from './utils/state'
import { Page } from './components/Page'

export const ConfirmCancelPage = () => {
  const [, dispatch] = useStateValue()

  return (
    <Route
      render={({ history }) => (
        <Page>
          <Layout columns={{ base: 4 / 4, md: 6 / 8, lg: 7 / 12 }}>
            <Stack spacing={10} shouldWrapChildren>
              <H1>
                <Trans id="confirmCancelPage.title" />
              </H1>
              <Flex direction="row" align="center" wrap="wrap" mb={10} mt={10}>
                <P w="100%">
                  <Trans id="confirmCancelPage.summary" />
                </P>

                <Button
                  onClick={() => {
                    dispatch({
                      type: 'deleteFormData',
                    })
                    history.push('/cancelled')
                  }}
                  type="submit"
                  w={{ base: '100%', md: 'auto' }}
                  variantColor="red"
                >
                  <Trans id="confirmCancelPage.cancelButton" />
                </Button>
                <Button
                  onClick={() => history.goBack()}
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color="black"
                  variant="link"
                  variantColor="gray"
                  textAlign="center"
                  w={{ base: '100%', md: 'auto' }}
                  ml={{ base: 0, md: 4 }}
                  mt={{ base: 4, md: 0 }}
                >
                  <Trans id="confirmCancelPage.goBack" />
                </Button>
              </Flex>
            </Stack>
          </Layout>
        </Page>
      )}
    />
  )
}
