/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
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
import { P } from '../components/paragraph'
import {
  SUBMIT_REPORT_MUTATION,
  getWhatHappened,
} from '../utils/queriesAndMutations'
import { ConfirmationForm } from './forms/ConfirmationForm'
import { randomizeString } from '../utils/randomizeStrings'

const SectionHeader = props => (
  <H2
    fontSize={[3, null, 4]}
    marginTop={[2, null, 3]}
    marginBottom={[1, null, 1]}
    {...props}
  />
)

const EditButton = props => (
  <Link type="button" color="black" textAlign="center" {...props}>
    <Trans>Edit</Trans>
  </Link>
)

const timeFrameSummary = client => {
  let timeFrame
  return (
    <React.Fragment>
      <SectionHeader>
        <Trans>Timeframe</Trans>{' '}
        <I18n>
          {({ i18n }) => (
            <EditButton
              aria-label={i18n._('Edit timeframe')}
              to="/p2/timeframe"
            />
          )}
        </I18n>
      </SectionHeader>
      {timeFrame ? (
        <Text>{timeFrame}</Text>
      ) : (
        <Text>
          <Trans>
            When the scam took place is crucial information for police to be
            able to investigate.
          </Trans>
        </Text>
      )}
    </React.Fragment>
  )
}

const whatHappenedSummary = client => {
  let { whatHappened } = getWhatHappened(client)

  return (
    <React.Fragment>
      <SectionHeader>
        <Trans>Scam</Trans>{' '}
        <I18n>
          {({ i18n }) => (
            <EditButton
              aria-label={i18n._('Edit what happened')}
              to="/p2/whathappened"
            />
          )}
        </I18n>
      </SectionHeader>
      {whatHappened ? (
        <Text>{whatHappened}</Text>
      ) : (
        <Text>
          <Trans>
            Knowing what made this illegal is critical for police to be able to
            investigate.
          </Trans>
        </Text>
      )}
    </React.Fragment>
  )
}

const scammerSummary = client => {
  let scammerInfo
  return (
    <React.Fragment>
      <SectionHeader>
        <Trans>Scammer</Trans>{' '}
        <I18n>
          {({ i18n }) => (
            <EditButton
              aria-label={i18n._('Edit scammer information')}
              to="/p2/scammerinfo"
            />
          )}
        </I18n>
      </SectionHeader>
      {scammerInfo ? (
        <Text>{scammerInfo}</Text>
      ) : (
        <Text>
          <Trans>
            Any clues about the scammer’s identity or proof from supporting
            documents helps police.
          </Trans>
        </Text>
      )}
    </React.Fragment>
  )
}

const impactSummary = client => {
  let impact
  return (
    <React.Fragment>
      <SectionHeader>
        <Trans>Impact</Trans>{' '}
        <I18n>
          {({ i18n }) => (
            <EditButton aria-label={i18n._('Edit impact')} to="/p2/impact" />
          )}
        </I18n>
      </SectionHeader>
      {impact ? (
        <Text>{impact}</Text>
      ) : (
        <Text>
          <Trans>
            Understanding the impact of these crimes helps us better support
            people affected.
          </Trans>
        </Text>
      )}
    </React.Fragment>
  )
}

const contactSummary = client => {
  let contact
  return (
    <React.Fragment>
      <SectionHeader>
        <Trans>Contact</Trans>{' '}
        <I18n>
          {({ i18n }) => (
            <EditButton
              aria-label={i18n._('Edit contact information')}
              to="/p2/contact"
            />
          )}
        </I18n>
      </SectionHeader>
      {contact ? (
        <Text>{contact}</Text>
      ) : (
        <Text>
          <Trans>This gives police a way to reach you, if needed.</Trans>
        </Text>
      )}
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

      <ApolloConsumer>
        {client => {
          client.writeData({
            data: { doneForms: true },
          })
          return (
            <React.Fragment>
              {timeFrameSummary(client)}
              {whatHappenedSummary(client)}
              {scammerSummary(client)}
              {impactSummary(client)}
              {contactSummary(client)}
            </React.Fragment>
          )
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
