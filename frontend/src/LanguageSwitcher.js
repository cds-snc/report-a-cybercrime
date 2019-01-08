import React from 'react'
import { Query, Mutation } from 'react-apollo'
import { css } from 'react-emotion'
import {
  GET_LANGUAGE_QUERY,
  CHANGE_LANGUAGE_MUTATION,
} from './utils/queriesAndMutations'

const buttonThatLooksLikeALink = css`
  background: none;
  border: none;
  font: inherit;
  color: white;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: 3px solid #ffbf47;
  }
`
const languageSwitcher = css`
  align-content: right;
  display: block-inline;
`

export const LanguageSwitcher = () => (
  <section className={languageSwitcher}>
    <Query query={GET_LANGUAGE_QUERY}>
      {({ data: { language } }) => (
        <Mutation mutation={CHANGE_LANGUAGE_MUTATION}>
          {switchLanguage => (
            <button
              className={buttonThatLooksLikeALink}
              onClick={() => switchLanguage()}
            >
              {language === 'en' ? 'Français' : 'English'}
            </button>
          )}
        </Mutation>
      )}
    </Query>
  </section>
)
