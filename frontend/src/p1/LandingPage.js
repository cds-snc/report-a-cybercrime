/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import PropTypes from 'prop-types'
import { ApolloConsumer } from 'react-apollo'
import { Trans } from '@lingui/macro'
import * as queryString from 'query-string'
import { P } from '../components/paragraph'
import { H1 } from '../components/header'
import { Ul } from '../components/unordered-list'
import { Li } from '../components/list-item'
import { ButtonsContainer } from '../components/buttons-container'
import { Text } from '../components/text'
import { Layout } from '../components/layout'
import { TrackPageViews } from '../TrackPageViews'

export const LandingPage = props => {
  const { surveyID, ResponseID } = queryString.parse(props.location.search)
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
              surveyInfo: JSON.stringify({
                surveyID: surveyID ? surveyID : '',
                ResponseID: ResponseID ? ResponseID : '',
              }),
            },
          })
        }
      </ApolloConsumer>

      <P>
        <Trans>
          Tell the RCMP's National Cybercrime Coordination Unit about a scam to
          help police across Canada investigate these crimes.
        </Trans>
      </P>
      <P>
        <Trans>You will be asked to:</Trans>
      </P>

      <Text>
        <Ul fontSize={[8, null, 8]}>
          <Li>
            <Trans>Describe the scam</Trans>
          </Li>
          <Li>
            <Trans>Tell us how much money was lost</Trans>
          </Li>
          <Li>
            <Trans>Add clues about the suspect</Trans>
          </Li>
          <Li>
            <Trans>Attach any supporting files</Trans>
          </Li>
        </Ul>
      </Text>
      <ButtonsContainer
        buttonLink={true}
        cancel={false}
        landing={true}
        route="/p1/scaminfo"
      />
    </Layout>
  )
}

LandingPage.propTypes = {
  location: PropTypes.object,
}
