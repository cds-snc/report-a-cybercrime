import React from 'react'
import { useLingui } from '@lingui/react'
import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import theme from './theme'
import { Home } from './Home'
import { Trans } from '@lingui/macro'
import { TopBanner } from './components/topbanner'
import { PhaseBanner } from './components/phase-banner'
import { WarningBanner } from './components/warning-banner'
import { Footer } from './components/footer'
import { FooterLink } from './components/link'
import { Content } from './components/container'

const App = () => {
  const { i18n } = useLingui()
  return (
    <React.Fragment>
      <Global
        styles={css`
          html,
          body {
            height: 100%;
          }

          body {
            margin: 0;
            padding: 0;
          }

          #root {
            display: flex;
            flex-direction: column;
            height: 100%;
          }
          @font-face {
            font-family: 'robotobold';
            src: url('fonts/roboto-bold.woff2') format('woff2'),
              url('fonts/roboto-bold.woff') format('woff');
            font-weight: bold;
            font-style: normal;
          }
        `}
      />
      <ThemeProvider theme={theme}>
        <header>
          <WarningBanner />
          <PhaseBanner phase={<Trans id="banner.phase" />}>
            <Trans id="banner.phaseText" />
          </PhaseBanner>
          <TopBanner lang={i18n.locale} bg="black" />
        </header>

        <Content>
          <Home />
        </Content>

        <Footer bg="black">
          <FooterLink
            href={
              i18n.locale === 'en'
                ? 'https://digital.canada.ca/legal/privacy/'
                : 'https://numerique.canada.ca/transparence/confidentialite/'
            }
          >
            <Trans id="banner.footerPrivacy" />
          </FooterLink>
          <FooterLink
            href={
              i18n.locale === 'en'
                ? 'https://digital.canada.ca/legal/terms/'
                : 'https://numerique.canada.ca/transparence/avis/'
            }
          >
            <Trans id="banner.footerTermsAndConditions" />
          </FooterLink>
        </Footer>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
