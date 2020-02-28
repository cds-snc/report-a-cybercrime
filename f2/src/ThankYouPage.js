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
import { Layout, Row } from './components/layout'
import { Text } from './components/text'
import { Stack, Alert, AlertIcon, Box, Icon } from '@chakra-ui/core'
import { useStateValue } from './utils/state'
import { P } from './components/paragraph'
import { Route } from 'react-router-dom'
import { Page } from './components/Page'

export const ThankYouPage = () => {
  const { i18n } = useLingui()
  const [state] = useStateValue()
  const [data] = useStateValue()

  console.log(state)

  const contactInfo = {
    ...data.formData.contactInfo,
  }

  const [, dispatch] = useStateValue()

  // Message displayed on Thank you Page
  let reportId = state.formData.reportId
  let thankYouMessage

  if (!reportId || reportId === '') {
    thankYouMessage = <Trans id="thankYouPage.reportSubmission" />
  } else if (reportId.startsWith('NCFRS-')) {
    thankYouMessage = (
      <Trans id="thankYouPage.referenceNumber" values={{ reference: reportId }}>
        <Text as="span" d="block" />
      </Trans>
    )
  } else {
    thankYouMessage = <Trans id="thankYouPage.reportSubmissionError" />
  }

  return (
    <Page>
      <Layout
        columns={{ base: 4 / 4, md: 6 / 8, lg: 7 / 12 }}
        mb={-10}
        zIndex={1}
      >
        {state.doneFinalFeedback && (
          <Alert status="success">
            <AlertIcon mt={0} />
            <Trans id="thankYouPage.feedback.success" />
          </Alert>
        )}

        <Row>
          <InfoCard
            bg="green.200"
            color="black"
            borderColor="green.400"
            spacing={6}
            columns={{ base: 4 / 4, md: 6 / 8 }}
          >
            <H1 mb={6}>
              <Trans id="thankYouPage.title" />
            </H1>

            <P fontSize="2xl">{thankYouMessage}</P>
          </InfoCard>
        </Row>
      </Layout>
      <Box bg="gray.200" py={10}>
        <Layout columns={{ base: 4 / 4, md: 6 / 8, lg: 7 / 12 }} pt={10}>
          <Stack spacing={4} shouldWrapChildren>
            <H2>
              <Trans id="thankYouPage.whatNextHeading" />
            </H2>
            <P>
              {contactInfo.email && <Trans id="thankYouPage.summary" />}
              <Trans id="thankYouPage.whatNextParagraph" />
            </P>
            <P>
              <Trans id="thankYouPage.whatNextParagraph2" />
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
      </Box>

      {/* After help section*/}
      <Layout pt={10} columns={{ base: 4 / 4, md: 6 / 8, lg: 7 / 12 }}>
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
            <LandingBox spacing={10} columns={{ base: 4 / 4, md: 6 / 8 }}>
              {state.doneFinalFeedback ? (
                <Box>
                  <H2 mb={2}>
                    <Trans id="finalFeedbackThanks.title" />
                  </H2>
                  <Trans id="thankYouPage.feedback.new" />
                </Box>
              ) : (
                <H2 mb={2}>
                  <Trans id="thankYouPage.feedback" />
                </H2>
              )}
              <ButtonLink
                mt="auto"
                variantColor="black"
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
    </Page>
  )
}
