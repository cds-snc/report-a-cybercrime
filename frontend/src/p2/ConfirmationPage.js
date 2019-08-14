/** @jsx jsx */
import { jsx } from '@emotion/core'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { Container } from '../components/container'
import { TrackPageViews } from '../TrackPageViews'
import { Steps } from '../components/stepper'
import { Layout } from '../components/layout'
import { P } from '../components/paragraph'
import { getWhatHappened } from '../utils/queriesAndMutations'
import { ConfirmationSummary } from './ConfirmationSummary'
import { ConfirmationForm } from './forms/ConfirmationForm'

const submit = (client, submitReport, data) => {
  let whatHappened = getWhatHappened(client)

  const augmentedData = {
    ...data,
    source: 'p2',
    whatHappened,
  }

  console.log(augmentedData)
  submitReport({ variables: augmentedData })
  navigate('thankyou')
}

export const ConfirmationPage = () => {
  return (
    <Layout>
      <TrackPageViews />
      <Container
        display="flex"
        width="90%"
        flexDirection="row"
        marginBottom="20px"
      >
        <Steps activeStep={4} steps={[{}, {}, {}, {}, {}]} />
      </Container>
      <H1>
        <Trans>Review your report</Trans>
      </H1>
      <P>
        <Trans>
          The more detail you give, the more likely it will be investigated.
        </Trans>
      </P>
      <ConfirmationSummary />
      <ConfirmationForm onSubmit={submit} />
    </Layout>
  )
}
