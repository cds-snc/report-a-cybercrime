import React from 'react'
import { Link, navigate } from '@reach/router'
import { css } from 'react-emotion'
import { Trans } from '@lingui/macro'
import { H1 } from './utils/headers'
import { ApolloConsumer } from 'react-apollo'
import ListItem from '@govuk-react/list-item'
import Breadcrumb from '@govuk-react/breadcrumb'
import { TrackPageViews } from './TrackPageViews'
import { WhatHappenedForm } from './WhatHappenedForm'

const warning = css`
  display: block;
  color: green;
  padding-top: 10pt;
  margin-left: 0pt;
  margin-bottom: 20pt;
  font-size: 19pt;
`

const centercontent = css`
  max-width: 750px;
  margin: auto;
`

const listitem = css`
  margin: 5pt;
  margin-left: 20pt;
  font-size: 19pt;
`

export const Screen1 = () => (
  <div className={centercontent}>
    <Breadcrumb>
      <Link to={'/'}>
        <Trans>Landing Page</Trans>
      </Link>
    </Breadcrumb>

    <H1>
      <Trans>Describe what happened</Trans>
    </H1>

    <TrackPageViews />
    <ListItem className={listitem}>
      <Trans>When did it take place?</Trans>
    </ListItem>
    <ListItem className={listitem}>
      <Trans>In general terms, who was involved?</Trans>
    </ListItem>
    <ListItem className={listitem}>
      <Trans>How were you affected?</Trans>
    </ListItem>

    <span className={warning}>
      <Trans>Please do not provide any personal information.</Trans>
    </span>

    <ApolloConsumer>
      {client => (
        <WhatHappenedForm
          onSubmit={data => {
            client.writeData({ data })
            navigate('/form2')
          }}
        />
      )}
    </ApolloConsumer>
  </div>
)
