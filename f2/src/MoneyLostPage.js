import { Route } from 'react-router-dom'
import React from 'react'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { Layout } from './components/layout'
import { MoneyLostInfoForm } from './forms/MoneyLostInfoForm'
import { TrackPageViews } from './TrackPageViews'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'
import { nextWhatWasAffectedUrl } from './utils/nextWhatWasAffectedUrl'
import { Steps } from './components/stepper'

export const MoneyLostPage = () => {
  const [state, dispatch] = useStateValue()
  const { doneForms, formData } = state
  const affectedOptions = formData.whatWasAffected
    ? formData.whatWasAffected.affectedOptions
    : []

  return (
    <Route
      render={({ history }) => (
        <Layout>
          <TrackPageViews />

          <Stack spacing={10} shouldWrapChildren>
            <BackButton route="/whatwasaffected">
              <Trans id="moneyLostPage.backButton" />
            </BackButton>
            <Steps activeStep={2} totalSteps={8} />
            <Stack spacing={4} role="heading" aria-level="1">
              <H1 as="span">
                <Trans id="moneyLostPage.title" />
              </H1>
            </Stack>
            <Stack spacing={4}>
              <P>
                <Trans id="moneyLostPage.intro" />
              </P>
            </Stack>
            <MoneyLostInfoForm
              onSubmit={data => {
                dispatch({
                  type: 'saveFormData',
                  data: { moneyLost: data },
                })
                history.push(
                  doneForms
                    ? '/confirmation'
                    : nextWhatWasAffectedUrl(affectedOptions, 'moneylost'),
                )
              }}
            />
          </Stack>
        </Layout>
      )}
    />
  )
}
