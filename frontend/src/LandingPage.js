import React from 'react'
import { css } from 'react-emotion'
import { Trans } from '@lingui/macro'
import { Link } from '@reach/router'
import { H1, H3 } from './utils/headers'
import ListItem from '@govuk-react/list-item'
import WarningText from '@govuk-react/warning-text'

const warning = css`
  font-family: Arial, sans-serif;
  padding-top: 20pt;
  padding-bottom: 20pt;
  color: green;
`
const listitem = css`
  margin: 5pt;
  margin-left: 20pt;
`
const link = css`
  font-size: 20pt;
`

const centercontent = css`
  max-width: 750px;
  margin: auto;
`

export const LandingPage = () => (
  <div className={centercontent}>
    <H1>
      <Trans> Have you or someone you know encountered a cybercrime ? </Trans>{' '}
    </H1>
    <H3>
      <Trans>Tell us your story in three easy steps:</Trans>
    </H3>
    <ListItem className={listitem}>
      <Trans>Describe what happened.</Trans>{' '}
    </ListItem>{' '}
    <ListItem className={listitem}>
      <Trans> Select where you encountered the cybercrime. </Trans>{' '}
    </ListItem>{' '}
    <ListItem className={listitem}>
      <Trans>Share how you were impacted.</Trans>{' '}
    </ListItem>
    <WarningText className={warning}>
      <Trans>Please do not provide any personal information.</Trans>{' '}
    </WarningText>
    <Link to={'form1'} className={link}>
      <Trans>Share your story→ </Trans>{' '}
    </Link>{' '}
  </div>
)
