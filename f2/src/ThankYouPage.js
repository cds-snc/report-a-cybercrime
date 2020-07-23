/** @jsx jsx */
import React from 'react'
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
import { Stack, Box, Icon } from '@chakra-ui/core'
import { useStateValue } from './utils/state'
import { P } from './components/paragraph'
import { Route } from 'react-router-dom'
import { Page } from './components/Page'
import { Alert } from './components/Messages'

export const ThankYouPage = () => {
  const { i18n } = useLingui()

  const [state, dispatch] = useStateValue()

  const contactInfo = {
    ...state.formData.contactInfo,
  }

  // Message displayed on Thank you Page
  const reportId = state.reportId
  const submissionInProgress = !reportId || reportId === ''
  const submissionSucceeded =
    !submissionInProgress && reportId.startsWith('NCFRS-')
  const submissionFailed = !submissionInProgress && !submissionSucceeded
  let thankYouMessage
  let thankYouTitle

  if (submissionInProgress) {
    thankYouTitle = <Trans id="thankYouPage.title" />
    thankYouMessage = <Trans id="thankYouPage.reportSubmission" />
  } else if (submissionSucceeded) {
    thankYouTitle = <Trans id="thankYouPage.title" />
    thankYouMessage = (
      <Trans id="thankYouPage.referenceNumber" values={{ reference: reportId }}>
        <Text as="span" d="block" id="NCFRS" aria-live="polite" />
      </Trans>
    )
  } else {
    thankYouTitle = <Trans id="thankYouPage.titleError" />
    thankYouMessage = (
      <Text
        as="span"
        d="block"
        fontSize="xl"
        id="NCFRSError"
        aria-live="assertive"
      >
        <Trans id="thankYouPage.reportSubmissionError1" />
        <A
          href={
            'tel:' + i18n._('thankYouPage.reportSubmissionError.phoneNumber')
          }
        >
          <Trans id="thankYouPage.reportSubmissionError.phoneNumber" />
        </A>

        <Trans id="thankYouPage.reportSubmissionError2" />
      </Text>
    )
  }

  return (
    <Page>
      <Layout
        columns={{ base: 4 / 4, md: 6 / 8, lg: 7 / 12 }}
        mb={-10}
        zIndex={1}
      >
        {state.doneFinalFeedback && (
          <Alert status="success" withIcon>
            <Trans id="thankYouPage.feedback.success" />
          </Alert>
        )}

        <Row>
          <InfoCard
            {...(submissionInProgress || submissionSucceeded
              ? { bg: 'green.200', borderColor: 'green.400' }
              : { bg: 'yellow.300', borderColor: 'yellow.400' })}
            color="black"
            spacing={6}
            columns={{ base: 4 / 4, md: 6 / 7 }}
          >
            <H1 mb={6}>{thankYouTitle}</H1>

            <P fontSize="2xl">{thankYouMessage}</P>

            {submissionFailed && (
              <ButtonLink
                mt="auto"
                variantColor="yellow"
                title={i18n._('thankYouPage.confirmationPageButton')}
                to="/confirmation"
              >
                <Icon
                  focusable="false"
                  mr={2}
                  ml={-2}
                  name="chevron-left"
                  size="28px"
                />
                <Trans id="thankYouPage.confirmationPageButton" />
              </ButtonLink>
            )}
          </InfoCard>
        </Row>

        <Row>
          <LandingBox spacing={10} columns={{ base: 4 / 4, md: 6 / 7 }}>
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
              title={i18n._('thankYouPage.feedbackButton')}
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
      </Layout>

      <Box bg="gray.100" py={10}>
        <Layout columns={{ base: 4 / 4, md: 6 / 8, lg: 7 / 12 }} pt={10}>
          <Stack spacing={4} shouldWrapChildren>
            {submissionInProgress ||
              (submissionSucceeded && (
                <React.Fragment>
                  <H2>
                    <Trans id="thankYouPage.whatNextHeading" />
                  </H2>
                  <P>
                    {contactInfo.email && <Trans id="thankYouPage.summary" />}
                    <Trans id="thankYouPage.whatNextParagraph" />
                  </P>
                  <P>
                    <Trans id="thankYouPage.whatNextParagraph2" />
                    <A
                      href={
                        'tel:' +
                        i18n._('thankYouPage.whatNextParagraph2.phoneNumber')
                      }
                    >
                      <Trans id="thankYouPage.whatNextParagraph2.phoneNumber" />
                    </A>
                    <Trans id="thankYouPage.whatNextParagraph2.period" />
                  </P>
                </React.Fragment>
              ))}
            <H2>
              <Trans id="thankYouPage.helpResource" />
            </H2>
            <Ul>
              <Li>
                <A
                  href={
                    i18n.locale === 'en'
                      ? 'https://www.rcmp-grc.gc.ca/en/cyber-safety/staying-cyber-healthy'
                      : 'https://www.rcmp-grc.gc.ca/fr/cybersecurite/assurer-sa-securite-ligne'
                  }
                  isExternal
                >
                  <Trans id="thankYouPage.helpResource0" />
                </A>
              </Li>
              <Li>
                <A
                  href={
                    i18n.locale === 'en'
                      ? 'https://www.getcybersafe.gc.ca/index-en.aspx'
                      : 'https://www.pensezcybersecurite.gc.ca/index-fr.aspx'
                  }
                  isExternal
                >
                  <Trans id="thankYouPage.helpResource1" />
                </A>
              </Li>
              <Li>
                <A
                  href={
                    i18n.locale === 'en'
                      ? 'https://antifraudcentre-centreantifraude.ca/protect-protegez-eng.htm'
                      : 'https://antifraudcentre-centreantifraude.ca/protect-protegez-fra.htm'
                  }
                  isExternal
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
                  isExternal
                >
                  <Trans id="thankYouPage.helpResource3" />
                </A>
              </Li>
            </Ul>
          </Stack>
        </Layout>
      </Box>

      {/* After help section*/}
      <Layout pt={10} columns={{ base: 4 / 4, lg: 7 / 12 }}>
        <Stack spacing={6}>
          {submissionSucceeded && (
            <Alert status="success" withIcon>
              <Trans id="thankYouPage.safelyCloseWindow" />
            </Alert>
          )}
          {submissionSucceeded && (
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
          )}
        </Stack>
      </Layout>
    </Page>
  )
}
