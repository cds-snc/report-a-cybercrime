/* eslint-disable react/no-unescaped-entities */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { Container } from './components/container'
import { Steps } from './components/stepper'
import { P } from './components/paragraph'
import { TrackPageViews } from './TrackPageViews'
import { MoneyLostForm } from './forms/MoneyLostForm'
import { Layout } from './components/layout'

const submitAndNavigate = (client, data) => {
  client.writeData({ data: { lostMoney: JSON.stringify(data) } })
  navigate('/suspectinfoquestion')
}

export const MoneyLostPage = () => (
  <Layout>
    <Container
      display="flex"
      width="90%"
      flexDirection="row"
      marginBottom="20px"
    >
      <Steps activeStep={1} steps={[{}, {}, {}, {}, {}]} />
    </Container>
    <H1>
      <Trans>Tell us about the money lost</Trans>
    </H1>
    <P>
      <Trans>
        We probably won't be able to recover the money, but understanding the
        impact of the scam can help build a case.
      </Trans>
    </P>
    <TrackPageViews />
    <MoneyLostForm onSubmit={submitAndNavigate} />
  </Layout>
)
