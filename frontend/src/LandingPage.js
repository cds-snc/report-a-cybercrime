import React, { Component } from 'react'
import { css } from 'react-emotion'
import { Trans } from '@lingui/macro'
import { Link } from '@reach/router'
import { H1, H3 } from '@govuk-react/header'
import Paragraph from '@govuk-react/paragraph'
import ListItem from '@govuk-react/list-item'
import WarningText from '@govuk-react/warning-text'

const warning = css`
  padding-top: 20pt;
  padding-bottom: 20pt;
`

const listitem = css`
  margin: 5pt;
  margin-left: 20pt;
`

export class LandingPage extends Component {
  render() {
    return (
      <div>
        <H1>
          <Trans>Have you or someone you know encountered a cybercrime?</Trans>
        </H1>

        <H3>Tell us your story in three easy steps:</H3>

        <ListItem className={listitem}>
          <Trans>
            Describe what happened. Provide as much information as you can.
          </Trans>
        </ListItem>
        <ListItem className={listitem}>
          <Trans>Select where you encountered the cybercrime.</Trans>
        </ListItem>
        <ListItem className={listitem}>
          <Trans>Share how you were you impacted.</Trans>
        </ListItem>

        <WarningText className={warning}>
          <Trans>You do not need to provide any personal information.</Trans>
        </WarningText>

        <Link to={'form1'}>
          <Trans>Share your story.</Trans>
        </Link>
      </div>
    )
  }
}
