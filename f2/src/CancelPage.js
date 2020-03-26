/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { H1, H2 } from './components/header'
import { P } from './components/paragraph'
import { Layout, Row } from './components/layout'
import { Stack, Box, Icon } from '@chakra-ui/core'
import { Route } from 'react-router-dom'
import { Ul } from './components/unordered-list'
import { Li } from './components/list-item'
import { A, Link, ButtonLink } from './components/link'
import { useLingui } from '@lingui/react'
import { useStateValue } from './utils/state'
import { Page } from './components/Page'
import { LandingBox } from './components/container'
import { Alert } from './components/Messages'

export const CancelPage = () => {
  const { i18n } = useLingui()
  const [, dispatch] = useStateValue()
  return (
    <Page>
      <Layout columns={{ base: 4 / 4, md: 6 / 8, lg: 7 / 12 }}>
        <Stack spacing={10} w="100%">
          <H1 mb={6}>
            <Trans id="cancelPage.title" />
          </H1>
          <P>
            <Trans id="cancelPage.summary" />
          </P>
          <Row>
            <LandingBox spacing={10} columns={{ base: 4 / 4, md: 6 / 8 }}>
              <H2 mb={2}>
                <Trans id="cancelPage.feedback" />
              </H2>

              <ButtonLink
                mt="auto"
                variantColor="black"
                title={i18n._('thankYouPage.feedbackButton.aria')}
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
            </LandingBox>
          </Row>
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
          </Stack>
          <Stack spacing={6}>
            <Alert status="success" withIcon>
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
        </Stack>
      </Layout>
    </Page>
  )
}
