import React, { Component } from 'react'
import { css } from 'react-emotion'
import { Query } from 'react-apollo'
import { Trans } from '@lingui/macro'
import TextArea from '@govuk-react/text-area'
import Button from '@govuk-react/button'
import Header from '@govuk-react/header'
import gql from 'graphql-tag'

export const HELLO_QUERY = gql`
  query GetHello {
    hello
  }
`

const submitButton = css`
  margin-top: 20pt;
`

export class ReportScreen extends Component {
  constructor() {
    super()
    this.state = {
      whatHappened: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ whatHappened: event.target.value })
  }

  handleSubmit(event) {
    alert('What happened: ' + this.state.whatHappened)
    event.preventDefault()
  }

  render() {
    const input = {
      id: 'what happened',
      onChange: this.handleChange,
      value: this.state.whatHappened,
    }

    return (
      <div>
        <Header level={1}>
          <Trans>Report a cybercrime</Trans>
        </Header>

        <Query query={HELLO_QUERY}>
          {({ loading, error, data }) => {
            console.log(loading, error, data)
            return (
              <div>
                {loading ? (
                  <p>
                    <Trans>loading...</Trans>
                  </p>
                ) : null}
                {error ? <p>Error</p> : null}
                {data && <div> Hello={data.hello} </div>}
              </div>
            )
          }}
        </Query>

        <form onSubmit={this.handleSubmit}>
          <TextArea name="group1" input={input}>
            <Trans>What happened?</Trans>
          </TextArea>
          <Button className={submitButton} type="submit">
            <Trans>Submit</Trans>
          </Button>
        </form>
      </div>
    )
  }
}
