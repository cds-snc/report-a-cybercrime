import React from 'react'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { Layout } from './components/layout'
import { Stack } from '@chakra-ui/core'
import { A } from './components/link'
import { useLingui } from '@lingui/react'
import { Page } from './components/Page'

export const TermsAndConditions = () => {
  const { i18n } = useLingui()

  return (
    <Page>
      <Layout columns={{ base: 4 / 4, md: 6 / 8, lg: 7 / 12 }}>
        <Stack spacing={10} shouldWrapChildren>
          <H1>
            <Trans id="termsConditions.title" />
          </H1>

          <Stack spacing={8}>
            <P>
              <Trans id="termsConditions.paragraph1">
                <A
                  href={
                    i18n.locale === 'en'
                      ? 'http://www.antifraudcentre-centreantifraude.ca/index-eng.htm'
                      : 'http://www.antifraudcentre-centreantifraude.ca/index-fra.htm'
                  }
                  isExternal
                />
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
                      ? 'http://www.rcmp-grc.gc.ca/en/home'
                      : 'http://www.rcmp-grc.gc.ca/fr/accueil'
                  }
                  isExternal
                />
              </Trans>
            </P>
            <P>
              <Trans id="termsConditions.paragraph2">
                <A
                  href={
                    i18n.locale === 'en'
                      ? 'http://www.antifraudcentre-centreantifraude.ca/terms-avis/index-eng.htm'
                      : 'http://www.antifraudcentre-centreantifraude.ca/terms-avis/index-fra.htm'
                  }
                  isExternal
                />
                <A
                  href={
                    i18n.locale === 'en'
                      ? 'http://www.rcmp-grc.gc.ca/en/terms-conditions'
                      : 'http://www.rcmp-grc.gc.ca/fr/avis'
                  }
                  isExternal
                />
              </Trans>
            </P>
            <P>
              <Trans id="termsConditions.paragraph3" />
              <A href={'/privacystatement?lang=' + i18n.locale} isExternal>
                <Trans id="termsConditions.linkOut" />
              </A>
              <Trans id="termsConditions.period" />
            </P>
          </Stack>
        </Stack>
      </Layout>
    </Page>
  )
}
