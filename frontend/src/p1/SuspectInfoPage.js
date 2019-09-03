/** @jsx jsx */
import { jsx } from '@emotion/core'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { Steps } from '../components/stepper'
import { P } from '../components/paragraph'
import { TrackPageViews } from '../TrackPageViews'
import { SuspectInfoForm } from './forms/SuspectInfoForm'
import { Layout } from '../components/layout'
import { getDoneForms } from '../utils/queriesAndMutations'
import { BackButton } from '../components/backbutton'

const submitAndNavigate = (client, data) => {
  client.writeData({ data: { suspectInfo: JSON.stringify(data) } })
  navigate(getDoneForms(client) ? 'confirmation' : 'uploadfilesquestion')
}

export const SuspectInfoPage = () => (
  <Layout>
    <BackButton route="/p1/suspectinfoquestion">
      <Trans>previous page</Trans>
    </BackButton>
    <Steps activeStep={3} totalSteps={6} />
    <H1>
      <Trans>Add suspect clues</Trans>
    </H1>
    <P>
      <Trans>
        Any information that was used by the scammer can help police identify
        suspects.
      </Trans>
    </P>
    <TrackPageViews />
    <SuspectInfoForm onSubmit={submitAndNavigate} />
  </Layout>
)
