import React from 'react'
import { ApolloConsumer } from 'react-apollo'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { ButtonLink } from './components/button-link'

const LanguageSwitcherStyle = styled('section')`
  align-content: right;
  display: block-inline;
`

const languageNames = {
  en: 'English',
  fr: 'Français',
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
