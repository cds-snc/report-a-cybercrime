import React, { Component } from 'react'
import { css } from 'react-emotion'
import { Trans } from '@lingui/macro'
import TextArea from '@govuk-react/text-area'
import Button from '@govuk-react/button'
import Header from '@govuk-react/header'

const submitButton = css`
  margin-top: 20pt;
`

export class Form1 extends Component {
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
          <Trans>Describe what happened.</Trans>
        </Header>

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
