import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import theme from './theme'
import { Query } from 'react-apollo'
import { Home } from './Home'
import Helmet from 'react-helmet-async'
import { Trans } from '@lingui/macro'
import { GET_LANGUAGE_QUERY } from './utils/queriesAndMutations'
import { TopBanner } from './components/topbanner'
import { Footer } from './components/footer'
import { FooterLink } from './components/link'

const Content = styled('div')`
  min-height: calc(100vh - 55px);
`

const App = () => (
  <Query query={GET_LANGUAGE_QUERY}>
    {({ data: { language } }) => (
      <div>
        <Helmet>
          <html lang={language} />
          <meta charset="utf-8" />
          <title lang={language}>
            {language === 'en'
              ? 'Tell us your cybercrime story'
              : 'Racontez-nous votre histoire de cybercriminalité'}
          </title>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/apple-touch-icon.png"
          />
          <script>
            {`
              window.__APOLLO_STATE__=${JSON.stringify({
                language,
              })}`}
          </script>
          <script>
            {`
                if ('serviceWorker' in navigator) {
                  window.addEventListener('load', () => {
                    navigator.serviceWorker.register('service-worker.js')
                  });
                }`}
          </script>
        </Helmet>
        <Global
          styles={css`
            body {
              margin: 0;
              font-family: 'Roboto', sans-serif;
            }
          `}
        />
        <ThemeProvider theme={theme}>
          <Content>
            <TopBanner lang={language} bg="black" />
            <Home />
          </Content>

          <Footer bg="black">
            <FooterLink
              href={
                language === 'en'
                  ? 'https://digital.canada.ca/legal/privacy/'
                  : 'https://numerique.canada.ca/transparence/confidentialite/'
              }
            >
              <Trans>Privacy</Trans>
            </FooterLink>
            <FooterLink
              href={
                language === 'en'
                  ? 'https://digital.canada.ca/legal/terms/'
                  : 'https://numerique.canada.ca/transparence/avis/'
              }
            >
              <Trans>Terms and Conditions</Trans>
            </FooterLink>
          </Footer>
        </ThemeProvider>
      </div>
    )}
  </Query>
)

export default App
