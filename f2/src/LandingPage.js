/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { useLingui } from '@lingui/react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Trans } from '@lingui/macro'
import { P } from './components/paragraph'
import { Button } from './components/button'
import { H1, H2 } from './components/header'
import { Ul } from './components/unordered-list'
import { Li } from './components/list-item'
import { A } from './components/link'
import { Layout } from './components/layout'
import { TrackPageViews } from './TrackPageViews'
import { Stack, Icon, Alert, AlertIcon, Box } from '@chakra-ui/core'
import { useStateValue } from './utils/state'
import { LandingBox } from './components/container'

export const LandingPage = props => {
  const { i18n } = useLingui()
  const [state, dispatch] = useStateValue()
  if (state.doneForms) {
    dispatch({ type: 'saveDoneForms', data: false })
  }
  return (
    <Route
      render={({ history }) => (
        <Layout>
          <TrackPageViews />

          <Stack spacing={10} shouldWrapChildren>
            <H1>
              <Trans id="landingPage.title" />
            </H1>
            <Stack spacing={4}>
              <P>
                <Trans id="landingPage.intro">
                <A
                        href={
                          i18n.locale === 'en'
                            ? 'http://www.rcmp-grc.gc.ca/en/the-national-cybercrime-coordination-unit-nc3'
                            : 'http://www.rcmp-grc.gc.ca/fr/groupe-national-coordination-cybercriminalite-gncc'
                        }
                        isExternal
                      />
                        <A
                          href={
                            i18n.locale === 'en'
                              ? 'http://www.antifraudcentre-centreantifraude.ca/index-eng.htm'
                              : 'http://www.antifraudcentre-centreantifraude.ca/index-fra.htm'
                          }
                          isExternal
                        />
                 </Trans>
              </P>

              <Stack spacing={4} direction="row" flexWrap="wrap">
                <LandingBox spacing={4} alignSelf="stretch">
                  <H2>
                    <Trans id="landingPage.reportOnline" />
                  </H2>

                  <P>
                    <Trans id="landingPage.onlineIntro" />

                  </P>
                  <Box flex="1 1 0"></Box>
                  <Button
                    onClick={() => {
                      history.push('/startPage')
                    }}
                  >
                    <Trans id="landingPage.nextButton.reportNow" />
                    <Icon
                      focusable="false"
                      ml={2}
                      mr={-2}
                      name="chevron-right"
                      size="28px"
                    />
                  </Button>
                </LandingBox>

                <LandingBox>
                  <H2>
                    <Trans id="landingPage.reportByPhone" />
                  </H2>

                  <Stack spacing={0}>
                    <P>
                      <Trans id="landingPage.phoneDays" />
                    </P>
                    <P>
                      <Trans id="landingPage.phoneTimes" />
                    </P>
                    <P>
                      <Trans id="landingPage.phoneNumber" />
                    </P>
                  </Stack>
                  <Box flex="1 1 0"></Box>

                  <Box>
                    <Button
                      onClick={() => {
                        window.open(
                          i18n.locale === 'en'
                            ? 'http://www.antifraudcentre-centreantifraude.ca/reportincident-signalerincident/index-eng.htm'
                            : 'http://www.antifraudcentre-centreantifraude.ca/reportincident-signalerincident/index-fra.htm',
                          '_blank', // Opens new tab
                        )
                      }}
                    >
                      <Trans id="landingPage.nextButton.callNow" />
                      <Icon
                        focusable="false"
                        ml={2}
                        mr={-2}
                        name="chevron-right"
                        size="28px"
                      />
                    </Button>
                  </Box>
                </LandingBox>
              </Stack>

              <Alert status="success" backgroundColor="blue.100">
                <AlertIcon name="info-outline" color="blue.800" />
                <Trans id="landingPage.warning" />
              </Alert>

              <H2>
                <Trans id="landingPage.reportingOptions" />
              </H2>

              <Stack spacing={10} shouldWrapChildren>
                <Ul>
                  <Li>
                    <Trans id="landingPage.reportingOptions0" />
                  </Li>
                  <Li>
                    <Trans id="landingPage.reportingOptions1">
                    <A
                        href={
                          i18n.locale === 'en'
                            ? 'https://www.cybertip.ca/app/en/report'
                            : 'https://www.cybertip.ca/app/fr/report'  

                        }
                        isExternal // Opens new tab
                      />
                        </Trans>   
                  </Li>
                  <Li>
                    <Trans id="landingPage.reportingOptions2">
                      <A
                        href={
                          i18n.locale === 'en'
                            ? 'https://www.consumer.equifax.ca/personal/'
                            : 'https://www.consumer.equifax.ca/personnel/'
                        }
                        isExternal // Opens new tab
                      />
                      <A
                        href={
                          i18n.locale === 'en'
                            ? 'https://www.transunion.ca/'
                            : 'https://www.transunion.ca/fr'
                        }
                        isExternal // Opens new tab
                      />
                    </Trans>
                  </Li>

                  <Li>
                    <Trans id="landingPage.reportingOptions3" />
                  </Li>
                </Ul>
              </Stack>
            </Stack>
          </Stack>
        </Layout>
      )}
    />
  )
}

LandingPage.propTypes = {
  location: PropTypes.object,
}
