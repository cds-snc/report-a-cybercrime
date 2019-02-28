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

// const Footer = styled('div')`
//   background-color: black;
//   margin: auto;
//   padding: 15px;
//   height: 25px;
// `
const Privacy = styled('a')`
  font-size: 15pt;
  margin-top: 100pt;
  margin-right: 20pt;
  color: white;
  :visited {
    color: white;
  }
`
const WordMarkDiv = styled('div')`
  display: inline-block;
  float: right;
  margin-top: 10px;
  height: 25px;
`

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

          <Footer lang={language} bg="black" />

          {/* <Footer>
            <Privacy
              href={
                language === 'en'
                  ? 'https://digital.canada.ca/legal/privacy/'
                  : 'https://numerique.canada.ca/transparence/confidentialite/'
              }
            >
              <Trans>Privacy</Trans>
            </Privacy>

            <Privacy
              href={
                language === 'en'
                  ? 'https://digital.canada.ca/legal/terms/'
                  : 'https://numerique.canada.ca/transparence/avis/'
              }
            >
              <Trans>Terms and Conditions</Trans>
            </Privacy>

            <WordMarkDiv>
              <WordMark width="6em" flag="#fff" text="#fff" />
            </WordMarkDiv>
          </Footer> */}
        </ThemeProvider>
      </div>
    )}
  </Query>
)

export default App
