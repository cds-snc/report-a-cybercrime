import React, { Component } from 'react'
import { css } from 'react-emotion'
import { Trans } from '@lingui/macro'
import { H1 } from '@govuk-react/header'

const paragraph = css`
  padding-top: 20pt;
  padding-bottom: 20pt;
  font-size: 20pt;
`

export class Thanks extends Component {
  render() {
    return (
      <div>
        <H1>
          <Trans>Thank you for sharing your story.</Trans>
        </H1>

        <div className={paragraph}>
          For more information on how to stay safe online, you can visit{' '}
          <a href="https://www.getcybersafe.gc.ca/index-en.aspx">
            GetCyberSafe
          </a>{' '}
          and the{' '}
          <a href="http://www.rcmp-grc.gc.ca/to-ot/tis-set/cyber-tips-conseils-eng.htm">
            Top 10 Cyber Crime Prevention Tips.
          </a>
        </div>
      </div>
    )
  }
}
