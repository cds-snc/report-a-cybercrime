import React from 'react'
import { Query, Mutation } from 'react-apollo'
import styled, { css } from 'react-emotion'
import { GET_LANGUAGE_QUERY, CHANGE_LANGUAGE_MUTATION } from "./utils/queriesAndMutations"

const A = styled('a')`
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`
const thing = css`
  align-content: right;
  display: block-inline;
`

export const LanguageSwitcher = () => (
  <section className={thing}>
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
