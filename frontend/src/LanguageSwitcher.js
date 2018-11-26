import React from 'react'
import { Query, Mutation } from 'react-apollo'
import styled, { css } from 'react-emotion'
import { Trans } from '@lingui/react'

import gql from 'graphql-tag'

export const GET_LANGUAGE_QUERY = gql`
  query GetLanguage {
    language @client
  }
`
export const CHANGE_LANGUAGE_MUTATION = gql`
  mutation switchLanguage {
    switchLanguage @client
  }
`

const A = styled('a')`
  text-decoration: underline;
  &:visited {
    color: #7834bc;
  }
  &:hover {
    cursor: pointer;
  }
`
const thing = css`
  align-content: right;
`
const langHeader = css`
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  width: 1px;
  margin: 0;
  overflow: hidden;
  position: absolute;
  align-content: right;
`

export const LanguageSwitcher = () => (
  <section className={thing}>
    <h2 className={langHeader}>
      <Trans>Language Selection</Trans>
    </h2>
    <Query query={GET_LANGUAGE_QUERY}>
      {({ data: { language } }) => (
        <Mutation mutation={CHANGE_LANGUAGE_MUTATION}>
          {switchLanguage => (
            <A onClick={() => switchLanguage()}>
              {language === 'en' ? 'Français' : 'English'}
            </A>
          )}
        </Mutation>
      )}
    </Query>
  </section>
)
