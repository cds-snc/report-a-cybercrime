/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { H1, H2 } from './components/header'
import { P } from './components/paragraph'
import { TrackPageViews } from './TrackPageViews'
import { Layout } from './components/layout'
import { Stack, Alert, AlertIcon, Box, Icon } from '@chakra-ui/core'
import { Route } from 'react-router-dom'
import { Button } from './components/button'
import { Ul } from './components/unordered-list'
import { Li } from './components/list-item'
import { A, Link, ButtonLink } from './components/link'
import { useLingui } from '@lingui/react'
import { useStateValue } from './utils/state'

export const CancelPage = () => {
  const { i18n } = useLingui()
  const [, dispatch] = useStateValue()
  return (
    <Stack w="100%">
      <Layout>
        <Stack spacing={10} w="100%">
          <TrackPageViews />
          <H1 mb={6}>
            <Trans id="cancelPage.title" />
          </H1>
          <P><Trans id="cancelPage.summary" /></P>
          <Box><ButtonLink
            mt="auto"
            variantColor="gray"
            color="white"
            title={i18n._('cancelPage.feedbackButton.aria')}
            to="/finalFeedback"
          >
            <Trans id="cancelPage.feedbackButton" />
            <Icon
              focusable="false"
              ml={2}
              mr={-2}
              name="chevron-right"
              size="28px"
            />
          </ButtonLink>
          </Box>
          <Box w="100%">
            <Layout>
              <Stack spacing={4} shouldWrapChildren>
                <H2 mb={2}>
                  <Trans id="thankYouPage.helpResource" />
                </H2>
                <Ul>
                  <Li>
                    <A
                      href={
                        i18n.locale === 'en'
                          ? 'https://www.getcybersafe.gc.ca/index-en.aspx'
                          : 'https://www.pensezcybersecurite.gc.ca/index-fr.aspx'
                      }
                    >
                      <Trans id="thankYouPage.helpResource1" />
                    </A>
                  </Li>
                  <Li>
                    <A
                      href={
                        i18n.locale === 'en'
                          ? 'http://www.antifraudcentre.ca/index-eng.htm'
                          : 'http://www.antifraudcentre.ca/index-fra.htm'
                      }
                    >
                      <Trans id="thankYouPage.helpResource2" />
                    </A>
                  </Li>
                  <Li>
                    <A
                      href={
                        i18n.locale === 'en'
                          ? 'http://www.rcmp-grc.gc.ca/to-ot/tis-set/cyber-tips-conseils-eng.htm'
                          : 'http://www.rcmp-grc.gc.ca/to-ot/tis-set/cyber-tips-conseils-fra.htm'
                      }
                    >
                      <Trans id="thankYouPage.helpResource3" />
                    </A>
                  </Li>
                </Ul>
                <Layout pt={10}>
                  <Stack spacing={6}>
                    <Alert status="success">
                      <AlertIcon mt={0} />
                      <Trans id="thankYouPage.safelyCloseWindow" />
                    </Alert>
                    <Box mb="auto">
                      <Route
                        render={({ history }) => (
                          <Link
                            onClick={() => {
                              dispatch({
                                type: 'deleteFormData',
                              })
                            }}
                            to="/"
                          >
                            <Trans id="thankYouPage.createNewReport" />
                          </Link>
                        )}
                      />
                    </Box>
                  </Stack>
                </Layout>
              </Stack>
            </Layout>
          </Box>
        </Stack>
      </Layout>

      <Layout fluid borderBottom="4px" borderColor="blue.500" mt="auto">
        <Layout>
          <Alert status="info" variant="solid">
            <AlertIcon name="chat" mt={0} />
            <Link as={Route} to="/finalFeedback" color="white" display="block">
              <Trans id="thankYouPage.feedback" />
            </Link>
          </Alert>
        </Layout>
      </Layout>
    </Stack>
  )
}
