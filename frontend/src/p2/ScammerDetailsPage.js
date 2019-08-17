/** @jsx jsx */
import { jsx } from '@emotion/core'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { P } from '../components/paragraph'
import { TrackPageViews } from '../TrackPageViews'
import { ScammerDetailsForm } from './forms/ScammerDetailsForm'
import { Layout } from '../components/layout'
import { getDoneForms } from '../utils/queriesAndMutations'

const submitAndNavigate = (client, data) => {
  client.writeData({ data: { scammerDetails: JSON.stringify(data) } })
  navigate(getDoneForms(client) ? 'confirmation' : 'impact')
}

export const ScammerDetailsPage = () => {
  return (
    <Layout>
      <H1>
        <Trans>About the scammer</Trans>
      </H1>
      <P fontSize={[4, null, 5]} fontWeight="bold">
        <Trans>We want to find out who is behind this scam</Trans>
      </P>
      <P>
        <Trans>
          Scammers are hard to track down. Any clues you can gather helps police
          find the person responsible and stop them.
        </Trans>
      </P>
      <TrackPageViews />
      <ScammerDetailsForm onSubmit={submitAndNavigate} />
    </Layout>
  )
}
