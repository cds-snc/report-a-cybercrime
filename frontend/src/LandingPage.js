import React from 'react'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { Link } from '@reach/router'
import { H1, H3 } from './utils/headers'
import { Query } from 'react-apollo'
import { GET_LANGUAGE_QUERY } from './utils/queriesAndMutations'
import { TrackPageViews } from './TrackPageViews'

const Warning = styled('div')`
  font-family: Arial, sans-serif;
  padding-top: 20pt;
  padding-bottom: 20pt;
  color: green;
`
const ListItem = styled('li')`
  margin: 5pt;
  margin-left: 20pt;
`
const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`
const CybercrimeLink = styled('div')`
  padding-top: 20pt;
`

export const LandingPage = () => (
  <Query query={GET_LANGUAGE_QUERY}>
    {({ data: { language } }) => (
      <CenterContent>
        <H1>
          <Trans> Have you or someone you know encountered a cybercrime?</Trans>
        </H1>
        <H3>
          <Trans>Tell us your story in three easy steps:</Trans>
        </H3>
        <TrackPageViews />
        <ul>
          <ListItem>
            <Trans>Describe what happened.</Trans>
          </ListItem>{' '}
          <ListItem>
            <Trans> Select where you encountered the cybercrime. </Trans>
          </ListItem>{' '}
          <ListItem>
            <Trans>Share how you were impacted.</Trans>
          </ListItem>
        </ul>
        <Warning>
          <Trans>Please do not provide any personal information.</Trans>
        </Warning>
        <Link to={'form1'}>
          <Trans>Share your story→ </Trans>
        </Link>
        <CybercrimeLink>
          <a
            href={
              language === 'en'
                ? 'http://www.rcmp-grc.gc.ca/en/cybercrime-an-overview-incidents-and-issues-canada'
                : 'http://www.rcmp-grc.gc.ca/fr/cybercriminalite-survol-des-incidents-et-des-enjeux-au-canada'
            }
          >
            <Trans>What is a cybercrime?</Trans>
          </a>
        </CybercrimeLink>
      </CenterContent>
    )}
  </Query>
)
