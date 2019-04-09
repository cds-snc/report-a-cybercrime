import React from 'react'
import { ApolloConsumer } from 'react-apollo'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const ButtonLink = styled('button')`
  font-family: ${({ theme }) => theme.fontSans};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  background: none;
  border: none;
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
