import React from 'react'
import { css } from 'react-emotion'
import { Trans } from '@lingui/macro'
import { Link } from '@reach/router'
import { H1, H3 } from './utils/headers'
import ListItem from '@govuk-react/list-item'
import WarningText from '@govuk-react/warning-text'
import { Query } from 'react-apollo'
import { GET_LANGUAGE_QUERY } from "./utils/queriesAndMutations"
import { TrackPageViews } from './TrackPageViews'

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
const cybercrimeLink = css`
  padding-top: 20pt;
`

export const LandingPage = () => (
  <Query query={GET_LANGUAGE_QUERY}>
    {({ data: { language } }) => (
      <div className={centercontent}>
        <H1>
          <Trans> Have you or someone you know encountered a cybercrime?</Trans>
        </H1>
        <H3>
          <Trans>Tell us your story in three easy steps:</Trans>
        </H3>
        <TrackPageViews />
        <ListItem className={listitem}>
          <Trans>Describe what happened.</Trans>
        </ListItem>{' '}
        <ListItem className={listitem}>
          <Trans> Select where you encountered the cybercrime. </Trans>
        </ListItem>{' '}
        <ListItem className={listitem}>
          <Trans>Share how you were impacted.</Trans>
        </ListItem>
        <WarningText className={warning}>
          <Trans>Please do not provide any personal information.</Trans>
        </WarningText>
        <Link to={'form1'} className={link}>
          <Trans>Share your story→ </Trans>
        </Link>
        <div className={cybercrimeLink}>
          <a
            href={
              language === 'en'
                ? 'http://www.rcmp-grc.gc.ca/en/cybercrime-an-overview-incidents-and-issues-canada'
                : 'http://www.rcmp-grc.gc.ca/fr/cybercriminalite-survol-des-incidents-et-des-enjeux-au-canada'
            }
          >
            <Trans>What is a cybercrime?</Trans>
          </a>
        </div>
      </div>
    )}
  </Query>
)
