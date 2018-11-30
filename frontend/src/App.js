import React from 'react'
import styled, { css } from 'react-emotion'
import { Query } from 'react-apollo'
import PropTypes from 'prop-types'
import { GoCSignature, WordMark } from '@cdssnc/gcui'
import Home from './Home'
import { LanguageSwitcher } from './LanguageSwitcher'
import gql from 'graphql-tag'
import { Trans } from '@lingui/macro'

export const GET_LANGUAGE_QUERY = gql`
  query GetLanguage {
    language @client
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
  min-height: calc(100vh - 75px);
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
