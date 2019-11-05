/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import PropTypes from 'prop-types'
import { ApolloConsumer } from 'react-apollo'
import { Trans } from '@lingui/macro'
import { P } from './components/paragraph'
import { H1 } from './components/header'
import { Ul } from './components/unordered-list'
import { Li } from './components/list-item'
import { InfoCard } from './components/container'
import { Layout } from './components/layout'
import { TrackPageViews } from './TrackPageViews'
import { ButtonsContainer } from './components/buttons-container'

export const LandingPage = props => {
  return (
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
