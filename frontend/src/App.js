import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import theme from './theme'
import { Query } from 'react-apollo'
import { Helmet } from 'react-helmet'
import Home from './Home'
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
