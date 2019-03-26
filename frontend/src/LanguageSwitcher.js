import React from 'react'
import { ApolloConsumer } from 'react-apollo'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

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

const languageNames = {
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
}

export const LanguageSwitcher = props => (
  <ApolloConsumer>
    {client => (
      <LanguageSwitcherStyle>
        <ButtonLink onClick={() => client.writeData({ data: props })}>
          {languageNames[props.language]}
        </ButtonLink>
      </LanguageSwitcherStyle>
    )}
  </ApolloConsumer>
)

LanguageSwitcher.propTypes = {
  language: PropTypes.string.isRequired,
}
