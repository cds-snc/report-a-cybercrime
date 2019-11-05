/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { navigate } from '@reach/router'
import PropTypes from 'prop-types'
import { ApolloConsumer } from 'react-apollo'
import { Trans } from '@lingui/macro'
import * as queryString from 'query-string'
import { P } from '../components/paragraph'
import { H1 } from '../components/header'
import { Ul } from '../components/unordered-list'
import { Li } from '../components/list-item'
import { InfoCard } from '../components/container'
import { ButtonsContainer } from '../components/buttons-container'
import { Layout } from '../components/layout'
import { TrackPageViews } from '../TrackPageViews'

export const LandingPage = props => {
  const { surveyID, ResponseID } = queryString.parse(props.location.search)
  return (
    <Layout>
      <TrackPageViews />
      <H1>
        <Trans id="landingPage.title">Report a scam</Trans>
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
              surveyInfo: JSON.stringify({
                surveyID: surveyID ? surveyID : '',
                ResponseID: ResponseID ? ResponseID : '',
              }),
            },
          })
        }
      </ApolloConsumer>

      <P>
        <Trans id="landingPage.intro">
          Scams can happen to anyone. They’re not always easy to recognize and
          new ones are invented every day.
        </Trans>
      </P>
      <InfoCard>
        <P>
          <Trans id="landingPage.required0">
            Before you start, gather what you can about the scam:
          </Trans>
        </P>
        <Ul>
          <Li>
            <Trans id="landingPage.required1">Dates when it took place</Trans>
          </Li>
          <Li>
            <Trans id="landingPage.required2">
              Descriptions of what happened
            </Trans>
          </Li>
          <Li>
            <Trans id="landingPage.required3">
              Details on where it came from
            </Trans>
          </Li>
          <Li>
            <Trans id="landingPage.required4">
              Documents, screenshots, or receipts
            </Trans>
          </Li>
        </Ul>
      </InfoCard>
      <br></br>
      <P>
        <Trans id="landingPage.summary">
          Your report helps the RCMP learn about these crimes and helps police
          across Canada catch cybercriminals.
        </Trans>
      </P>

      <ButtonsContainer
        cancel={false}
        buttonLink={false}
        nextPage="Report now"
        onClick={() => navigate('/p2/timeframe')}
      >
        <Trans id="landingPage.nextButton">Report now ❯</Trans>
      </ButtonsContainer>
    </Layout>
  )
}

LandingPage.propTypes = {
  location: PropTypes.object,
}