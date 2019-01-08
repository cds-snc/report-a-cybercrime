import React from 'react'
import styled, { css, injectGlobal } from 'react-emotion'
import { Query } from 'react-apollo'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { GoCSignature, WordMark } from '@cdssnc/gcui'
import Home from './Home'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Trans } from '@lingui/macro'
import { GET_LANGUAGE_QUERY } from './utils/queriesAndMutations'
// import * as serviceWorker from '../public/service-worker'
const serviceWorker = require('../public/service-worker')

if (typeof window !== 'undefined') {
  console.log('App: going to register!!')
  serviceWorker.register()
}

injectGlobal`
  html, body, #root {
    font-family: Arial, sans-serif;
    margin: 0;
  }
`

const fipBanner = css`
  background-color: black;
  margin: auto;
  padding: 10px;
  height: 40px;
`
const flag = css`
  float: left;
  padding: 5px;
  width: 300px;
`
const languageButton = css`
  display: inline-block;
  float: right;
  margin-top: 10px;
`
const footer = css`
  background-color: black;
  margin: auto;
  padding: 15px;
  height: 25px;
`
const privacy = css`
  font-size: 15pt;
  margin-top: 100pt;
  margin-right: 20pt;
  color: white;
  :visited {
    color: white;
  }
`
const wordMark = css`
  display: inline-block;
  float: right;
  // margin-top: 10px;
  height: 25px;
`

const Content = styled('div')`
  min-height: calc(100vh - 55px);
`

const TopBanner = props => (
  <div className={fipBanner}>
    <div className={flag}>
      <GoCSignature width="100%" lang={props.lang} flag="#fff" text="#fff" />
    </div>

    <div className={languageButton}>
      <LanguageSwitcher />
    </div>
  </div>
)

TopBanner.propTypes = {
  lang: PropTypes.string,
}

const App = () => (
  <Query query={GET_LANGUAGE_QUERY}>
    {({ data: { language } }) => (
      <div>
        <Helmet>
          <html lang={language} />
        </Helmet>

        <Content>
          <TopBanner lang={language} />
          <Home />
        </Content>

        <div className={footer}>
          <a
            href={
              language === 'en'
                ? 'https://digital.canada.ca/legal/privacy/'
                : 'https://numerique.canada.ca/transparence/confidentialite/'
            }
            className={privacy}
          >
            <Trans>Privacy</Trans>
          </a>

          <a
            href={
              language === 'en'
                ? 'https://digital.canada.ca/legal/terms/'
                : 'https://numerique.canada.ca/transparence/avis/'
            }
            className={privacy}
          >
            <Trans>Terms and Conditions</Trans>
          </a>

          <div className={wordMark}>
            <WordMark width="6em" flag="#fff" text="#fff" />
          </div>
        </div>
      </div>
    )}
  </Query>
)

export default App
