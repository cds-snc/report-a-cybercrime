/**@jsx jsx **/
import React from 'react'
import { Global, css, jsx } from '@emotion/core'
import { I18n } from '@lingui/react'
import { ThemeProvider } from 'emotion-theming'
import theme from './theme'
import { Query } from 'react-apollo'
import { Home } from './Home'
import { Helmet } from 'react-helmet-async'
import { Trans } from '@lingui/macro'
import { GET_LANGUAGE_QUERY } from './utils/queriesAndMutations'
import { TopBanner } from './components/topbanner'
import { Footer } from './components/footer'
import { FooterLink } from './components/link'
import { Content } from './components/container'

const App = () => (
  <I18n>
    {({ i18n }) => {
      return (
        <Query query={GET_LANGUAGE_QUERY}>
          {({ data: { language } }) => (
            <React.Fragment>
              <Helmet>
                <html lang={language} />
                <meta charset="utf-8" />
                console.log(i18n) return (
                <title lang={language}>{i18n._('Upload a file')}</title>
                )
                <link
                  href="https://fonts.googleapis.com/css?family=Roboto"
                  rel="stylesheet"
                />
                <link rel="manifest" href="/manifest.json" />
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
                />
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
                  }Img

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
                <TopBanner lang={language} bg="#000"/>
                <center style={{display:"flex",justifyContent:"center"}}>
                <img src="/public/rcmp.png" style={{maxHeight:"116px", maxWidth:"30%"}}/>
                <img src="/public/cccs.jpg" style={{maxHeight:"116px", width:"30%", marginLeft:"10%", marginRight:"10%"}}/>
                <img src="/public/crtc.png" style={{maxHeight:"116px", maxWidth:"30%"}}/>
                </center>
                <Content>
                  <Home />
                </Content>

                <Footer bg="#000">
                  <FooterLink
                    href={
                      language === 'en'
                        ? 'https://digital.canada.ca/legal/privacy/'
                        : 'https://numerique.canada.ca/transparence/confidentialite/'
                    }e
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
    }}
  </I18n>
)

export default App
