/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Route } from 'react-router-dom'
import { Trans } from '@lingui/macro'
import { P } from './components/paragraph'
import { H1 } from './components/header'
import { Layout } from './components/layout'
import { TrackPageViews } from './TrackPageViews'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'
import { BackButton } from './components/backbutton'

export const FeedbackPage = props => {
    const [state, dispatch] = useStateValue()
    if (state.doneForms){
        dispatch({ type: 'saveForms', data: false })
    }
    
    return (
        <Route
          render={({ history }) => (
            <Layout>
              <TrackPageViews />
              
              <Stack spacing={10} shouldWrapChildren>
              
                <BackButton route="/thankYouPage">
                  <Trans id="feedbackPage.backButton" />
                </BackButton>
    
                <H1>
                  <Trans id="feedbackPage.title" />
                </H1>
                <Stack spacing={4}>
                  <P>
                    <Trans id="feedbackPage.part1" />
                  </P>
                 
                  <P>
                    <Trans id="feedbackPage.part2" />
                    <Trans id="feedbackPage.contactInfo"/>
                  </P>

                </Stack>s
              </Stack>
            </Layout>
          )}
        />
      )
}
  