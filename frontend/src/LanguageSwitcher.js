import React from 'react'
import PropTypes from 'prop-types'
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

const langHeader = css`
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  width: 1px;
  margin: 0;
  overflow: hidden;
  position: absolute;
`

export const LanguageSwitcher = () => (
  <Query query={GET_LANGUAGE_QUERY}>
    {({ data: { language } }) => (
      <Mutation mutation={CHANGE_LANGUAGE_MUTATION}>
        {switchLanguage => (
          <LanguageSwitcherBase
            language={language}
            switchLanguage={switchLanguage}
          />
        )}
      </Mutation>
    )}
  </Query>
)

export class LanguageSwitcherBase extends React.Component {
  componentDidMount() {
    const browserLanguage = navigator.language
    if (
      browserLanguage.toLowerCase().indexOf('fr') !== -1 &&
      this.props.language === 'en'
    ) {
      this.props.switchLanguage()
    }
  }

  render() {
    return (
      <section>
        <h2 className={langHeader}>
          <Trans>Language Selection</Trans>
        </h2>
        <A onClick={() => this.props.switchLanguage()}>
          {this.props.language === 'en' ? 'Français' : 'English'}
        </A>
      </section>
    )
  }
}

LanguageSwitcherBase.propTypes = {
  language: PropTypes.string.isRequired,
  switchLanguage: PropTypes.func.isRequired,
}
