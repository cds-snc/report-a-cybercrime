/**@jsx jsx **/
import React from 'react'
import styled from '@emotion/styled'
import { Global, css, jsx } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import theme from './theme'
import { Query } from 'react-apollo'
import { Helmet } from 'react-helmet'
import { Home } from './Home'
import { Trans } from '@lingui/macro'
import { GET_LANGUAGE_QUERY } from './utils/queriesAndMutations'
import { TopBanner } from './components/topbanner'
import { Footer } from './components/footer'
import { FooterLink } from './components/link'
import { Content } from './components/container'

const App = () => (
  <Query query={GET_LANGUAGE_QUERY}>
    {({ data: { language } }) => (
      <React.Fragment>
        <Helmet>
          <html lang={language} />
        </Helmet>
        <Global
          styles={css`
            html,
            body {
              height: 100%;
              font-family: sans-serif;
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
          <Home />
          {/* <TopBanner lang={language} bg="black" />
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
          </Footer> */}
        </ThemeProvider>
      </React.Fragment>
    )}
  </Query>
)

export default App
