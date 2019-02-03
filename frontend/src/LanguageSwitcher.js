import React from 'react'
import { Query, Mutation } from 'react-apollo'
import styled from '@emotion/styled'
import {
  GET_LANGUAGE_QUERY,
  CHANGE_LANGUAGE_MUTATION,
} from './utils/queriesAndMutations'

const ButtonLink = styled('button')`
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
const LanguageSwitcherStyle = styled('section')`
  align-content: right;
  display: block-inline;
`

export const LanguageSwitcher = () => (
  <LanguageSwitcherStyle>
    <Query query={GET_LANGUAGE_QUERY}>
      {({ data: { language } }) => (
        <Mutation mutation={CHANGE_LANGUAGE_MUTATION}>
          {switchLanguage => (
            <ButtonLink onClick={() => switchLanguage()}>
              {language === 'en' ? 'Français' : 'English'}
            </ButtonLink>
          )}
        </Mutation>
      )}
    </Query>
  </LanguageSwitcherStyle>
)
