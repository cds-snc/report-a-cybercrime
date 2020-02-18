import React from 'react'
import { Trans } from '@lingui/macro'
import { H1, H2 } from './components/header'
import { P } from './components/paragraph'
import { Layout } from './components/layout'
import { TrackPageViews } from './TrackPageViews'
import { Stack } from '@chakra-ui/core'
import { A } from './components/link'
import { useLingui } from '@lingui/react'

export const PrivacyStatementPage = () => {
  const { i18n } = useLingui()
  // eslint-disable-line no-unused-vars

  return (
    <Layout>
      <TrackPageViews />
      <Stack spacing={10} shouldWrapChildren>
        <H1 as="span">
          <Trans id="privacyStatementPage.title" />
        </H1>
        <H2 as="span">
          <Trans id="privacyStatementPage.whoHeading" />
        </H2>
        <P>
          <Trans id="privacyStatementPage.whoText1">
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
        <H2 as="span">
          <Trans id="privacyStatementPage.whathappensHeading" />
        </H2>
        <P>
          <Trans id="privacyStatementPage.whathappensText" />
        </P>
        <H2 as="span">
          <Trans id="privacyStatementPage.informationHeading" />
        </H2>
        <P>
          <Trans id="privacyStatementPage.informationText1" />
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
        <H2 as="span">
          <Trans id="privacyStatementPage.toinquireHeading" />
        </H2>
        <P>
          <Trans id="privacyStatementPage.toinquireText1" />
        </P>
        <P>
          <Trans id="privacyStatementPage.toinquireText2">
            <A href="mailto:atipb@rcmp-grc.gc.ca" isExternal />
          </Trans>
        </P>
        <P>
          <Trans id="privacyStatementPage.toinquireText3">
            <A href="mailto:info@priv.gc.ca" isExternal />
          </Trans>
        </P>
      </Stack>
    </Layout>
  )
}
