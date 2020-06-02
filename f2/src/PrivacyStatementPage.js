import React from 'react'
import { Trans } from '@lingui/macro'
import { H1, H2 } from './components/header'
import { P } from './components/paragraph'
import { Layout } from './components/layout'
import { Stack } from '@chakra-ui/core'
import { A } from './components/link'
import { useLingui } from '@lingui/react'
import { Page } from './components/Page'

export const PrivacyStatementPage = () => {
  const { i18n } = useLingui()
  // eslint-disable-line no-unused-vars

  return (
    <Page>
      <Layout columns={{ base: 4 / 4, md: 6 / 8, lg: 7 / 12 }}>
        <Stack spacing={20}>
          <H1>
            <Trans id="privacyStatementPage.title" />
          </H1>
          <Stack spacing={4}>
            <H2>
              <Trans id="privacyStatementPage.whoHeading" />
            </H2>
            <P>
              <Trans id="privacyStatementPage.whoText1">
                <A
                  href={
                    i18n.locale === 'en'
                      ? 'http://www.rcmp-grc.gc.ca/en/nc3'
                      : 'http://www.rcmp-grc.gc.ca/fr/gnc3'
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
            <P>
              <Trans id="privacyStatementPage.whoText2">
                <A
                  href={
                    i18n.locale === 'en'
                      ? 'http://www.rcmp-grc.gc.ca/en/home'
                      : 'http://www.rcmp-grc.gc.ca/fr/accueil'
                  }
                  isExternal
                />
                <A
                  href={
                    i18n.locale === 'en'
                      ? 'https://www.cyber.gc.ca/en/'
                      : 'https://www.cyber.gc.ca/fr/'
                  }
                  isExternal
                />
              </Trans>
            </P>
          </Stack>
          <Stack spacing={4}>
            <H2>
              <Trans id="privacyStatementPage.whathappensHeading" />
            </H2>
            <P>
              <Trans id="privacyStatementPage.whathappensText" />
            </P>
          </Stack>
          <Stack spacing={4}>
            <H2>
              <Trans id="privacyStatementPage.informationHeading" />
            </H2>
            <P>
              <Trans id="privacyStatementPage.informationText1">
                <A
                  href={
                    i18n.locale === 'en'
                      ? 'https://www.rcmp-grc.gc.ca/atip-aiprp/infosource/pib-frp-eng.htm#ppu005'
                      : 'https://www.rcmp-grc.gc.ca/atip-aiprp/infosource/pib-frp-fra.htm#ppu005'
                  }
                  isExternal
                />
              </Trans>
            </P>
            <P>
              <Trans id="privacyStatementPage.informationText2">
                <A
                  href={
                    i18n.locale === 'en'
                      ? 'https://digital.canada.ca'
                      : 'https://numerique.canada.ca'
                  }
                  isExternal
                />
              </Trans>
            </P>
          </Stack>
          <Stack spacing={4}>
            <H2>
              <Trans id="privacyStatementPage.authorizationHeading" />
            </H2>
            <P>
              <Trans id="privacyStatementPage.authorizationText1" />
            </P>
          </Stack>
          <Stack spacing={4}>
            <H2>
              <Trans id="privacyStatementPage.webAnalyticsHeading" />
            </H2>
            <P>
              <Trans id="privacyStatementPage.webAnalyticsText1" />
            </P>
            <P>
              <Trans id="privacyStatementPage.webAnalyticsText2">
                <A
                  href={
                    i18n.locale === 'en'
                      ? 'https://www.rcmp-grc.gc.ca/en/terms-conditions'
                      : 'https://www.rcmp-grc.gc.ca/fr/avis'
                  }
                  isExternal
                />
              </Trans>
            </P>
          </Stack>
          <Stack spacing={4}>
            <H2>
              <Trans id="privacyStatementPage.toinquireHeading" />
            </H2>
            <P>
              <Trans id="privacyStatementPage.toinquireText1" />
              <A
                href={
                  'tel:' +
                  i18n._('privacyStatementPage.toinquireText1.phoneNumber')
                }
              >
                <Trans id="privacyStatementPage.toinquireText1.phoneNumber" />
              </A>
              <Trans id="privacyStatementPage.toinquireText1.lastPeriod" />
            </P>
            <P>
              <Trans id="privacyStatementPage.toinquireText2">
                <A href="mailto:atipb@rcmp-grc.gc.ca" isExternal />
              </Trans>
              <A
                href={
                  'tel:' +
                  i18n._('privacyStatementPage.toinquireText2.phoneNumber1')
                }
              >
                <Trans id="privacyStatementPage.toinquireText2.phoneNumber1" />
              </A>
              <Trans id="privacyStatementPage.toinquireText2.or"></Trans>
              <A
                href={
                  'tel:' +
                  i18n._('privacyStatementPage.toinquireText2.phoneNumber2')
                }
              >
                <Trans id="privacyStatementPage.toinquireText2.phoneNumber2" />
              </A>
              <Trans id="privacyStatementPage.toinquireText2.lastPeriod" />
            </P>
            <P>
              <Trans id="privacyStatementPage.toinquireText3">
                <A href="mailto:info@priv.gc.ca" isExternal />
              </Trans>
              <A
                href={
                  'tel:' +
                  i18n._('privacyStatementPage.toinquireText3.phoneNumber')
                }
              >
                <Trans id="privacyStatementPage.toinquireText3.phoneNumber" />
              </A>
              <Trans id="privacyStatementPage.toinquireText3.lastPeriod" />
            </P>
          </Stack>
        </Stack>
      </Layout>
    </Page>
  )
}
