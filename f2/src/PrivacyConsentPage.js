import { Route } from 'react-router-dom'
import React from 'react'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { Layout } from './components/layout'
import { PrivacyConsentInfoForm } from './forms/PrivacyConsentInfoForm'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'
import { A } from './components/link'
import { useLingui } from '@lingui/react'
import { Page } from './components/Page'

export const PrivacyConsentPage = () => {
  const { i18n } = useLingui()
  const [state, dispatch] = useStateValue() // eslint-disable-line no-unused-vars

  return (
    <Route
      render={({ history }) => (
        <Page>
          <Layout columns={{ base: 4 / 4, md: 6 / 8, lg: 7 / 12 }}>
            <Stack spacing={10} shouldWrapChildren>
              <BackButton />

              <H1>
                <Trans id="privacyConsentPage.title" />
              </H1>

              <Stack spacing={8}>
                <P>
                  <Trans id="privacyConsentPage.intro">
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
                  <Trans id="privacyConsentInfoPage.sharing" />
                </P>
                <P>
                  <Trans id="privacyConsentInfoPage.learnMore" />
                  <A href={'/privacystatement?lang=' + i18n.locale} isExternal>
                    <Trans id="privacyConsentInfoPage.linkOut" />
                  </A>
                  <Trans id="privacyConsentInfoPage.period" />
                </P>
                <PrivacyConsentInfoForm
                  onSubmit={data => {
                    dispatch({
                      type: 'saveFormData',
                      data: { consent: data },
                    })
                    history.push('/anonymous')
                  }}
                />
              </Stack>
            </Stack>
          </Layout>
        </Page>
      )}
    />
  )
}
