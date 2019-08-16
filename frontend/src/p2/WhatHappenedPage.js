/** @jsx jsx */
import { jsx } from '@emotion/core'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { P } from '../components/paragraph'
import { Ul } from '../components/unordered-list'
import { Li } from '../components/list-item'
import { TrackPageViews } from '../TrackPageViews'
import { WhatHappenedForm } from './forms/WhatHappenedForm'
import { Layout } from '../components/layout'
import { getDoneForms } from '../utils/queriesAndMutations'

const submitAndNavigate = (client, data) => {
  client.writeData({ data: { whatHappened: JSON.stringify(data) } })
  navigate(getDoneForms(client) ? 'confirmation' : '/p2/scammerdetails')
}

export const WhatHappenedPage = () => (
  <Layout>
    <H1>
      <Trans>Describe what happened</Trans>
    </H1>
    <P>
      <Trans>
        We know this can be hard to talk about. What happened is not your fault.
        Scammers use a number of techniques to get what they want.
      </Trans>
    </P>
    <P>
      <Trans>Think about things such as:</Trans>
    </P>
    <Ul>
      <Li>
        <Trans>What website were you visiting when something went wrong?</Trans>
      </Li>
      <Li>
        <Trans>What did the scammer say or do that was misleading?</Trans>
      </Li>
      <Li>
        <Trans>How was the situation suspicious or malicious?</Trans>
      </Li>
    </Ul>
    <TrackPageViews />
    <WhatHappenedForm onSubmit={submitAndNavigate} />
  </Layout>
)
