/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import PropTypes from 'prop-types'
import { ApolloConsumer } from 'react-apollo'
import { Trans } from '@lingui/macro'
import { P } from './components/paragraph'
import { H1 } from './components/header'
import { Ul } from './components/unordered-list'
import { Li, ListItem } from './components/list-item'
import { InfoCard } from './components/container'
import { Layout } from './components/layout'
import { TrackPageViews } from './TrackPageViews'
import { ButtonsContainer } from './components/buttons-container'
import { Text, Stack, List, Box } from '@chakra-ui/core'

export const LandingPage = props => {
  return (
    <Layout>
      <TrackPageViews />
      <H1>
        <Trans>Report a scam</Trans>
      </H1>
      <ApolloConsumer>
        {client =>
          client.writeData({
            data: {
              doneForms: false,
              scamInfo: JSON.stringify({}),
              lostMoney: JSON.stringify({}),
              suspectInfo: JSON.stringify({}),
              files: [],
              contactInfo: JSON.stringify({}),
              timeFrame: JSON.stringify({}),
              whatHappened: JSON.stringify({}),
              scammerDetails: JSON.stringify({}),
              impact: JSON.stringify({}),
              tellUsMore: JSON.stringify({}),
            },
          })
        }
      </ApolloConsumer>
      <Stack spacing={2}>
        <Text>
          <Trans>
            Scams can happen to anyone. They’re not always easy to recognize and
            new ones are invented every day.
          </Trans>
        </Text>
        <InfoCard>
          <Text>
            <Trans>Before you start, gather what you can about the scam:</Trans>
          </Text>
          <List styleType="disc" pl={0}>
            <ListItem>
              <Trans>Dates when it took place</Trans>
            </ListItem>
            <ListItem>
              <Trans>Descriptions of what happened</Trans>
            </ListItem>
            <ListItem>
              <Trans>Details on where it came from</Trans>
            </ListItem>
            <ListItem>
              <Trans>Documents, screenshots, or receipts</Trans>
            </ListItem>
          </List>
        </InfoCard>
        <Text>
          <Trans>
            Your report helps the RCMP learn about these crimes and helps police
            across Canada catch cybercriminals.
          </Trans>
        </Text>
      </Stack>
      <ButtonsContainer
        landing={true}
        buttonLink={true}
        cancel={false}
        route="timeframe"
      />
    </Layout>
  )
}

LandingPage.propTypes = {
  location: PropTypes.object,
}
