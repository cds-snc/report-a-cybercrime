/** @jsx jsx */
import { jsx } from '@emotion/core'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { P } from '../components/paragraph'
import { TrackPageViews } from '../TrackPageViews'
import { ScamInfoForm } from './forms/ScamInfoForm'
import { Steps } from '../components/stepper'
import { Layout } from '../components/layout'
import { getDoneForms } from '../utils/queriesAndMutations'
import { BackButton } from '../components/backbutton'

const submitAndNavigate = (client, data) => {
  client.writeData({ data: { scamInfo: JSON.stringify(data) } })
  navigate(getDoneForms(client) ? 'confirmation' : 'moneylostquestion')
}

export const ScamInfoPage = () => (
  <Layout>
    <BackButton route="/p1">
      <Trans>start page</Trans>
    </BackButton>
    <Steps activeStep={1} totalSteps={6} />
    <H1>
      <Trans>Describe the scam</Trans>
    </H1>
    <P>
      <Trans>
        Any information about where, when, and how the scam took place is
        helpful for police.
      </Trans>
    </P>
    <TrackPageViews />
    <ScamInfoForm onSubmit={submitAndNavigate} />
  </Layout>
)
