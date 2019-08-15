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
    <P marginBottom="20px">
      <Trans>
        We know this can be hard to talk about. What happened is not your fault.
      </Trans>
    </P>
    <P>
      <Trans>
        Scammers use a number of techniques to get what they want. Tell us about
        it to stop this from happening again.
      </Trans>
    </P>
    <P>
      <Trans>Think about things such as:</Trans>
    </P>
    <Ul>
      <Li>
        <Trans>What were you doing when something went wrong?</Trans>
      </Li>
      <Li>
        <Trans>How did the scammer say or do that was misleading?</Trans>
      </Li>
      <Li>
        <Trans>What made this suspicious or malicious?</Trans>
      </Li>
    </Ul>
    <TrackPageViews />
    <WhatHappenedForm onSubmit={submitAndNavigate} />
  </Layout>
)
