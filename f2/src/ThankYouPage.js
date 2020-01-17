/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { H1, H2 } from './components/header'
import { A } from './components/link'
import { Link } from './components/link'
import { Ul } from './components/unordered-list'
import { Li } from './components/list-item'
import { InfoCard } from './components/container'
import { TrackPageViews } from './TrackPageViews'
import { Layout } from './components/layout'
import { Text } from './components/text'
import { Stack, Icon, Alert, AlertIcon, Box } from '@chakra-ui/core'
import { Link as Route } from 'react-router-dom'
import { useStateValue } from './utils/state'

export const ThankYouPage = () => {
  const { i18n } = useLingui()
  const [state] = useStateValue()

  return (
    <Box w="100%">
      <Stack spacing={-10} w="100%">
        <Layout>
          <TrackPageViews />
          <InfoCard
            bg="green.900"
            rounded="5px"
            boxShadow="lg"
            color="green.200"
            maxW={{ lg: '80%', xl: '60%' }}
            z-index="10"
            position="relative"
          >
            <H1 mb={6}>
              <Trans id="thankYouPage.title" />
            </H1>
            <Trans id="thankYouPage.summary" />
            <Trans
              id="thankYouPage.referenceNumber"
              values={{
                reference: state.formData.reportId
                  ? state.formData.reportId
                  : '< report ID >',
              }}
            >
              <Text as="span" color="yellow.200" fontSize="xl" />
            </Trans>
          </InfoCard>
        </Layout>
        <Layout fluid bg="gray.300" pt={20} pb={10}>
          <Layout>
            <Stack spacing={4} shouldWrapChildren>
              <H2>
                <Trans id="thankYouPage.helpResource" />
              </H2>
              <Ul>
                <Li>
                  <A
                    href={
                      i18n.locale === 'en'
                        ? 'http://www.rcmp-grc.gc.ca/ccaps-spcca/vic-eng.htm'
                        : 'http://www.rcmp-grc.gc.ca/ccaps-spcca/vic-fra.htm'
                    }
                  >
                    <Trans id="thankYouPage.helpResource1" />
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
                    <Trans id="thankYouPage.helpResource2" />
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
                    <Trans id="thankYouPage.helpResource3" />
                  </A>
                </Li>
              </Ul>

              <H2>
                <Trans id="thankYouPage.otherReportOption" />
              </H2>
              <Ul>
                <Li>
                  <Trans id="thankYouPage.otherReportOption1" />
                </Li>

                <Li>
                  <Trans id="thankYouPage.otherReportOption2" />
                </Li>

                <Li>
                  <Trans id="thankYouPage.otherReportOption3" />
                </Li>

                <Li>
                  <Trans id="thankYouPage.otherReportOption4">
                    <A
                      href={
                        i18n.locale === 'en'
                          ? 'https://www.consumer.equifax.ca/personal/'
                          : 'https://www.consumer.equifax.ca/personnel/'
                      }
                    />
                    <A
                      href={
                        i18n.locale === 'en'
                          ? 'https://www.transunion.ca/'
                          : 'https://www.transunion.ca/fr'
                      }
                    />
                  </Trans>
                </Li>
              </Ul>
            </Stack>
          </Layout>
        </Layout>
      </Stack>

      {/*After help section*/}
      <Layout pt={10}>
        <Alert status="success">
          <AlertIcon mt={0} />
          <Trans id="thankYouPage.safelyCloseWindow" />
        </Alert>

        <Link as={Route} to="/" my={8} color="black" display="block">
          <Trans id="thankYouPage.createNewReport" />
          <Icon name="chevron-right" />
        </Link>
      </Layout>
      <Layout fluid borderBottom="4px" borderColor="blue.500">
        <Layout>
          <Alert status="info" variant="solid">
            <AlertIcon name="chat" mt={0} />
            <Trans id="thankYouPage.feedback" />
          </Alert>
        </Layout>
      </Layout>
    </Box>
  )
}
