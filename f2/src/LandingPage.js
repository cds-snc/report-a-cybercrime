/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { useLingui } from '@lingui/react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Trans } from '@lingui/macro'
import { P } from './components/paragraph'
import { ButtonLink } from './components/link'
import { H1, H2 } from './components/header'
import { Ul } from './components/unordered-list'
import { Li } from './components/list-item'
import { A } from './components/link'
import { Layout } from './components/layout'
import { Stack, Icon } from '@chakra-ui/core'
import { useStateValue } from './utils/state'
import { Page } from './components/Page'
import { Well } from './components/Messages'

export const LandingPage = props => {
  const { i18n } = useLingui()
  const [state, dispatch] = useStateValue()
  if (state.doneForms) {
    dispatch({ type: 'saveDoneForms', data: false })
  }
  return (
    <Route
      render={({ history }) => (
        <Page>
          <Layout columns={{ base: 4 / 4, md: 6 / 8, lg: 7 / 12 }}>
            <Stack spacing={10} shouldWrapChildren>
              <H1>
                <Trans id="landingPage.title" />
              </H1>
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

              <Stack alignItems="flex-start">
                <H2>
                  <Trans id="landingPage.reportOnline" />
                </H2>

                <P>
                  <Trans id="landingPage.onlineIntro" />
                </P>
                <ButtonLink to="/startPage">
                  <Trans id="landingPage.nextButton.reportNow" />
                  <Icon
                    focusable="false"
                    ml={2}
                    mr={-2}
                    name="chevron-right"
                    size="28px"
                  />
                </ButtonLink>
              </Stack>
              <Stack>
                <H2>
                  <Trans id="landingPage.reportByPhone" />
                </H2>

                <Stack>
                  <P>
                    <Trans id="landingPage.phoneDays" />
                  </P>
                  <P>
                    <Trans id="landingPage.phoneTimes" />
                  </P>
                  <P>
                    <A href={'tel:' + i18n._('landingPage.phoneNumber')}>
                      <Trans id="landingPage.phoneNumber" />
                    </A>
                  </P>
                </Stack>
              </Stack>

              <Well>
                <Trans id="landingPage.warning" />
              </Well>

              <H2>
                <Trans id="landingPage.reportingOptions" />
              </H2>

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
          </Layout>
        </Page>
      )}
    />
  )
}

LandingPage.propTypes = {
  location: PropTypes.object,
}
