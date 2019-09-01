/* eslint-disable react/no-unescaped-entities */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { Steps } from '../components/stepper'
import { P } from '../components/paragraph'
import { TrackPageViews } from '../TrackPageViews'
import { MoneyLostForm } from './forms/MoneyLostForm'
import { Layout } from '../components/layout'
import { getDoneForms } from '../utils/queriesAndMutations'
import { BackButton } from '../components/backbutton'

const submitAndNavigate = (client, data) => {
  client.writeData({ data: { lostMoney: JSON.stringify(data) } })
  navigate(getDoneForms(client) ? 'confirmation' : 'suspectinfoquestion')
}

export const MoneyLostPage = () => (
  <Layout>
    <BackButton route="/p1/moneylostquestion">
      <Trans>Money lost question</Trans>
    </BackButton>
    <Steps activeStep={2} totalSteps={6} />
    <H1>
      <Trans>Tell us about the money lost</Trans>
    </H1>
    <P>
      <Trans>
        The police will not get your money back, but understanding the impact of
        the scam can help build a case.
      </Trans>
    </P>
    <TrackPageViews />
    <MoneyLostForm onSubmit={submitAndNavigate} />
  </Layout>
)
