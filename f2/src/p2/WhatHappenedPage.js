/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { P } from '../components/paragraph'
import { Ul } from '../components/unordered-list'
import { Li } from '../components/list-item'
import { Steps } from '../components/stepper'
import { TrackPageViews } from '../TrackPageViews'
import { WhatHappenedForm } from './forms/WhatHappenedForm'
import { Layout } from '../components/layout'
import { getDoneForms } from '../utils/queriesAndMutations'
import { BackButton } from '../components/backbutton'

export const WhatHappenedPage = () => (
  <Route
    render={({ history }) => (
      <Layout>
        <BackButton route="/timeframe">
          <Trans>the timeframe</Trans>
        </BackButton>
        <Steps activeStep={2} totalSteps={6} />
        <H1>
          <Trans>Describe what happened</Trans>
        </H1>
        <P>
          <Trans>
            What happened is not your fault. Scammers use a number of techniques
            to get what they want.
          </Trans>
        </P>
        <P>
          <Trans>Think about including things such as:</Trans>
        </P>
        <Ul>
          <Li>
            <Trans>Which app, website, or device you were using</Trans>
          </Li>
          <Li>
            <Trans>How the scammer contacted you</Trans>
          </Li>
          <Li>
            <Trans>What they promised, threatened, or stole</Trans>
          </Li>
        </Ul>
        <TrackPageViews />
        <WhatHappenedForm
          onSubmit={(client, data) => {
            client.writeData({ data: { whatHappened: JSON.stringify(data) } })
            history.push(
              getDoneForms(client) ? '/confirmation' : '/scammerdetails',
            )
          }}
        />
      </Layout>
    )}
  />
)
