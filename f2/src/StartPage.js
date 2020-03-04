/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Trans } from '@lingui/macro'
import { P } from './components/paragraph'
import { Button } from './components/button'
import { H1 } from './components/header'
import { Ul } from './components/unordered-list'
import { Li } from './components/list-item'
import { Layout } from './components/layout'
import { Stack, Icon, Alert, AlertIcon } from '@chakra-ui/core'
import { useStateValue } from './utils/state'
import { BackButton } from './components/backbutton'
import { Page } from './components/Page'

export const StartPage = props => {
  const [state, dispatch] = useStateValue()
  if (state.doneForms) {
    dispatch({ type: 'saveDoneForms', data: false })
  }

  return (
    <Route
      render={({ history }) => (
        <Page>
          <Layout columns={{ base: 4 / 4, md: 6 / 8, lg: 7 / 12 }}>
            <Stack spacing={10} shouldWrapChildren>
              <BackButton></BackButton>

              <H1>
                <Trans id="startPage.title" />
              </H1>
              <Stack spacing={4}>
                <P>
                  <Trans id="startPage.intro" />
                </P>
                <Ul>
                  <Li>
                    <Trans id="startPage.requirement1" />
                  </Li>
                  <Li>
                    <Trans id="startPage.requirement2" />
                  </Li>
                  <Li>
                    <Trans id="startPage.requirement3" />
                  </Li>
                  <Li>
                    <Trans id="startPage.requirement4" />
                  </Li>
                </Ul>
              </Stack>
              <Button
                onClick={() => {
                  history.push('/privacyconsent')
                }}
              >
                <Trans id="startPage.nextButton" />
                <Icon
                  focusable="false"
                  ml={2}
                  mr={-2}
                  name="chevron-right"
                  size="28px"
                />
              </Button>

              <Alert status="info" backgroundColor="blue.100" mb={10}>
                <AlertIcon name="info-outline" color="blue.800" />
                <Trans id="startPage.warning" />
              </Alert>
            </Stack>
          </Layout>
        </Page>
      )}
    />
  )
}

StartPage.propTypes = {
  location: PropTypes.object,
}
