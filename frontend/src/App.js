/**@jsx jsx **/
import React from 'react'
import { Global, css, jsx } from '@emotion/core'
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
import { Content } from './components/container'

const pageTitle = language => {
  if (language === 'fr') {
    return 'Racontez-nous votre histoire de cybercriminalité'
  } else {
    return 'Tell us your cybercrime story'
  }
}

const App = () => (
  <Query query={GET_LANGUAGE_QUERY}>
    {({ data: { language } }) => (
      <React.Fragment>
        <Helmet>
          <html lang={language} />
          <meta charset="utf-8" />
          <title lang={language}>{pageTitle(language)}</title>
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

          {process.env.NODE_ENV === 'production' ? (
            <script>
              {`
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('service-worker.js')
                });
              }
            `}
            </script>
          ) : null}
        </Helmet>
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
          `}
        />
        <ThemeProvider theme={theme}>
          <TopBanner lang={language} bg="black" />
          <Content>
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
      </React.Fragment>
    )}
  </Query>
)

export default App
