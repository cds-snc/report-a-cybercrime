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
  client.writeData({ data: { scamInfo: JSON.stringify(data) } })
  navigate(getDoneForms(client) ? 'confirmation' : 'moneylostquestion')
}

export const WhatHappenedPage = () => (
  <Layout>
    <H1>
      <Trans>Describe what happened</Trans>
    </H1>
    <P marginBottom="20px">
      <Trans>We know this can be hard to talk about.</Trans>
    </P>
    <P fontSize={[4, null, 5]} fontWeight="bold">
      <Trans>What happened is not your fault</Trans>
    </P>
    <P>
      <Trans>Scammers use sophisticated techniques to trick people.</Trans>
    </P>
    <Ul>
      <Li>
        <Trans>What did the scammer do to make it convincing?</Trans>
      </Li>
      <Li>
        <Trans>How did you realize something was wrong?</Trans>
      </Li>
      <Li>
        <Trans>What did they say or do that was dishonest?</Trans>
      </Li>
    </Ul>
    <TrackPageViews />
    <WhatHappenedForm onSubmit={submitAndNavigate} />
  </Layout>
)
