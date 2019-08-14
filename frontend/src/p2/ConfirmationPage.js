/** @jsx jsx */
import { jsx } from '@emotion/core'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { ApolloConsumer, Mutation } from 'react-apollo'
import { H1 } from '../components/header'
import { Container } from '../components/container'
import { Button } from '../components/button'
import { Link } from '../components/link'
import { TrackPageViews } from '../TrackPageViews'
import { Steps } from '../components/stepper'
import { Layout } from '../components/layout'
import { P } from '../components/paragraph'
import {
  SUBMIT_REPORT_MUTATION,
  getWhatHappened,
} from '../utils/queriesAndMutations'
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

      <Container
        maxWidth="305px"
        marginTop={[3, null, 4]}
        display="flex"
        flex-direction="column"
        justify-content="space-between"
      >
        <ApolloConsumer>
          {client => (
            <Mutation mutation={SUBMIT_REPORT_MUTATION}>
              {submitReport => (
                <Button
                  type="submit"
                  onClick={() => submit(client, submitReport)}
                >
                  <Trans>Submit report</Trans>
                </Button>
              )}
            </Mutation>
          )}
        </ApolloConsumer>
      </Container>

      <Container
        maxWidth="300px"
        marginTop={[2, null, 3]}
        display="flex"
        flex-direction="column"
        justify-content="space-between"
      >
        <Link type="button" color="black" to="/p2" textAlign="center">
          <Trans>Cancel report</Trans>
        </Link>
      </Container>
    </Layout>
  )
}
