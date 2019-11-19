/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ApolloConsumer } from 'react-apollo'
import { Trans } from '@lingui/macro'
import { P } from './components/paragraph'
import { Button } from './components/button'
import { H1 } from './components/header'
import { Ul } from './components/unordered-list'
import { Li } from './components/list-item'
import { InfoCard } from './components/container'
import { Layout } from './components/layout'
import { TrackPageViews } from './TrackPageViews'

export const LandingPage = props => {
  return (
    <Route
      render={({ history }) => (
        <Layout>
          <TrackPageViews />
          <H1>
            <Trans id="landingPage.title" />
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

          <P>
            <Trans id="landingPage.intro" />
          </P>
          <InfoCard>
            <P>
              <Trans id="landingPage.required0" />
            </P>
            <Ul>
              <Li>
                <Trans id="landingPage.required1" />
              </Li>
              <Li>
                <Trans id="landingPage.required2" />
              </Li>
              <Li>
                <Trans id="landingPage.required3" />
              </Li>
              <Li>
                <Trans id="landingPage.required4" />
              </Li>
            </Ul>
          </InfoCard>
          <br></br>
          <P>
            <Trans id="landingPage.summary" />
          </P>

          <Button
            color="white"
            px={7}
            py={2}
            mb={[3, null, 5]}
            onClick={() => {
              history.push('/timeframe')
            }}
          >
            <Trans id="landingPage.nextButton" />
          </Button>
        </Layout>
      )}
    />
  )
}

LandingPage.propTypes = {
  location: PropTypes.object,
}
