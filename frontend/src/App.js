import React from 'react'
import { css } from 'react-emotion'
import { Query } from 'react-apollo'
import { GoCSignature } from '@cdssnc/gcui'
import Home from './Home'
import { LanguageSwitcher } from './LanguageSwitcher'
import gql from 'graphql-tag'

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

const App = () => (
  <div>
    <div className={fipBanner}>
      <Query query={GET_LANGUAGE_QUERY}>
        {({ data: { language } }) => (
          <div className={flag}>
            <GoCSignature
              width="100%"
              lang={language}
              flag="#fff"
              text="#fff"
            />
          </div>
        )}
      </Query>
      <div className={languageButton}>
        <LanguageSwitcher />
      </div>
    </div>
    <Home />
  </div>
)

export default App
