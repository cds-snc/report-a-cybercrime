/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { I18n } from '@lingui/react'
import { ApolloConsumer, Mutation } from 'react-apollo'
import { H1, H2 } from '../components/header'
import { Container } from '../components/container'
import { Text } from '../components/text'
import { Button } from '../components/button'
import { Link } from '../components/link'
import { TrackPageViews } from '../TrackPageViews'
import { Steps } from '../components/stepper'
import { Layout } from '../components/layout'
import {
  SUBMIT_REPORT_MUTATION,
  getWhatHappened,
} from '../utils/queriesAndMutations'
import { randomizeString } from '../utils/randomizeStrings'

const EditButton = props => (
  <I18n>
    {({ i18n }) => {
      return (
        <Link type="button" color="black" textAlign="center" {...props}>
          <Trans>Edit</Trans>
        </Link>
      )
    }}
  </I18n>
)

const whatHappenedSummary = client => {
  let { whatHappened } = getWhatHappened(client)

  return (
    <React.Fragment>
      <H2 fontSize={[3, null, 4]} marginBottom={[1, null, 1]}>
        <Trans>What happened</Trans>{' '}
        <I18n>
          {({ i18n }) => (
            <EditButton
              aria-label={i18n._('Edit what happened')}
              to="/p2/whathappened"
            />
          )}
        </I18n>
      </H2>
      {whatHappened ? <Text>{whatHappened}</Text> : null}
    </React.Fragment>
  )
}

const submit = (client, submitReport) => {
  let whatHappened = getWhatHappened(client)

  const data = {
    source: 'p2',
    whatHappened,
  }
  submitReport({ variables: data })
  navigate('thankyou')
}

export const ConfirmationPage = () => {
  return (
    <Layout>
      <Container
        display="flex"
        width="90%"
        flexDirection="row"
        marginBottom="20px"
      >
        <Steps activeStep={4} steps={[{}, {}, {}, {}, {}]} />
      </Container>
      <H1>
        <Trans>Confirm report information</Trans>
      </H1>
      <TrackPageViews />
      <ApolloConsumer>
        {client => {
          client.writeData({
            data: { doneForms: true },
          })

          return <React.Fragment>{whatHappenedSummary(client)}</React.Fragment>
        }}
      </ApolloConsumer>

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
