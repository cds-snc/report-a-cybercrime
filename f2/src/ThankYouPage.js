/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { H1, H2 } from './components/header'
import { A, ButtonLink } from './components/link'
import { Link } from './components/link'
import { Ul } from './components/unordered-list'
import { Li } from './components/list-item'
import { InfoCard, LandingBox } from './components/container'
import { TrackPageViews } from './TrackPageViews'
import { Layout, Row } from './components/layout'
import { Text } from './components/text'
import { Stack, Alert, AlertIcon, Box, Icon } from '@chakra-ui/core'
import { useStateValue } from './utils/state'
import { P } from './components/paragraph'
import { Route } from 'react-router-dom'

export const ThankYouPage = () => {
  const { i18n } = useLingui()
  const [state] = useStateValue()
  const [data] = useStateValue()

  const contactInfo = {
    ...data.formData.contactInfo,
  }

  const [, dispatch] = useStateValue()

  return (
    <Box w="100%">
      <Stack spacing={10} w="100%">
        <Layout>
          <TrackPageViews />
          <Row>
            <InfoCard
              bg="green.200"
              color="black"
              borderColor="green.400"
              spacing={6}
            >
              <H1 mb={6}>
                <Trans id="thankYouPage.title" />
              </H1>
              <P fontSize="lg">
                <Trans
                  id="thankYouPage.referenceNumber"
                  values={{
                    reference: state.formData.reportId
                      ? state.formData.reportId
                      : '< report ID >',
                  }}
                >
                  <Text as="span" d="block" fontSize="2xl" />
                </Trans>
              </P>
            </InfoCard>
          </Row>

          {contactInfo.email && <Trans id="thankYouPage.summary" />}
        </Layout>
        <Layout fluid bg="gray.200" py={10}>
          <Layout>
            <Stack spacing={4} shouldWrapChildren>
              <H2>
                <Trans id="thankYouPage.whatNextHeading" />
              </H2>
              <P>
                <Trans id="thankYouPage.whatNextParagraph" />
              </P>

              <H2>
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
          </Layout>
        </Layout>
      </Stack>

      {/* After help section*/}
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

          <Row>
            <LandingBox spacing={10}>
              <H2>
                <Trans id="thankYouPage.feedback" />
              </H2>
              <ButtonLink
                mt="auto"
                variantColor="gray"
                color="white"
                title={i18n._('thankYouPage.feedbackButton.aria')}
                to="/finalFeedback"
              >
                <Trans id="thankYouPage.feedbackButton" />
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
        </Stack>
      </Layout>
    </Box>
  )
}
