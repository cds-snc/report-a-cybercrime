import React from 'react'
import { css } from 'react-emotion'
import { Trans } from '@lingui/macro'
import { H1, H3 } from '@govuk-react/header'

const centercontent = css`
  max-width: 750px;
  margin: auto;
`

const paragraph = css`
  padding-top: 20pt;
  padding-bottom: 20pt;
  font-size: 20pt;
`

export const Thanks = () => (
  <div className={centercontent}>
    <H1>
      <Trans>Thank you for sharing your story.</Trans>
    </H1>

    <H3>
      <Trans>
        You are the 5th person to use this tool to share a cybercrime story.
      </Trans>
    </H3>

    <div className={paragraph}>
      For more information on how to stay safe online, you can visit{' '}
      <a href="https://www.getcybersafe.gc.ca/index-en.aspx">GetCyberSafe</a>{' '}
      and the{' '}
      <a href="http://www.rcmp-grc.gc.ca/to-ot/tis-set/cyber-tips-conseils-eng.htm">
        Top 10 Cyber Crime Prevention Tips.
      </a>
    </div>
  </div>
)
