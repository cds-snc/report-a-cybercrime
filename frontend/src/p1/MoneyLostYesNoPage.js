/**@jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { P } from '../components/paragraph'
import { TrackPageViews } from '../TrackPageViews'
import { Container } from '../components/container'
import { Steps } from '../components/stepper'
import { Layout } from '../components/layout'
import { ButtonsContainerYesNo } from '../components/buttons-container'

export const LoseMoney = () => (
  <Layout>
    <TrackPageViews />
    <Container
      display="flex"
      width="90%"
      flexDirection="row"
      marginBottom="20px"
    >
      <Steps activeStep={1} steps={[{}, {}, {}, {}, {}]} />
    </Container>
    <H1>
      <Trans>Tell us if money was lost</Trans>
    </H1>
    <P>
      <Trans>Did the scam involve a request for money?</Trans>
    </P>

    <ButtonsContainerYesNo
      yesRoute="../moneylost"
      noRoute="../suspectinfoquestion"
    />
  </Layout>
)
