/** @jsx jsx */
import { useEffect } from 'react'
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { Ul } from './components/unordered-list'
import { Lead, P } from './components/paragraph'
import { WhatHappenedForm } from './forms/WhatHappenedForm'
import { Layout } from './components/layout'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'
import { Page } from './components/Page'
import { Li } from './components/list-item'
import { formDefaults } from './forms/defaultValues'
import { useHistory } from 'react-router-dom'

export const WhatHappenedPage = () => {
  const [state, dispatch] = useStateValue()
  const { doneForms } = state

  const whatWasAffected = {
    ...formDefaults.whatWasAffected,
    ...state.formData.whatWasAffected,
  }
  const history = useHistory()
  useEffect(() => {
    if (state.formData.consent.consentOptions.length === 0) {
      history.push('/privacyconsent')
    }
  })

  return (
    <Route
      render={({ history }) => (
        <Page>
          <Layout columns={{ base: 4 / 4, md: 6 / 8, lg: 7 / 12 }}>
            <Stack spacing={10} shouldWrapChildren>
              <BackButton />
              <H1>
                <Trans id="whatHappenedPage.title" />
              </H1>
              <Stack spacing={4}>
                <Lead>
                  <Trans id="whatHappenedPage.intro1" />
                </Lead>
                <P mt={8}>
                  <Trans id="whatHappenedPage.thinkAbout" />
                </P>
                <Ul>
                  <Li>
                    <Trans id="whatHappenedPage.thinkAbout.default1" />
                  </Li>
                  {whatWasAffected.affectedOptions.includes(
                    'whatWasAffectedForm.other',
                  ) && (
                    <Li>
                      <Trans id="whatHappenedPage.thinkAbout.other" />
                    </Li>
                  )}
                  {whatWasAffected.affectedOptions.includes(
                    'whatWasAffectedForm.financial',
                  ) && (
                    <Li>
                      <Trans id="whatHappenedPage.thinkAbout.money" />
                    </Li>
                  )}
                  {whatWasAffected.affectedOptions.includes(
                    'whatWasAffectedForm.personalInformation',
                  ) && (
                    <Li>
                      <Trans id="whatHappenedPage.thinkAbout.personalInfo" />
                    </Li>
                  )}
                  {whatWasAffected.affectedOptions.includes(
                    'whatWasAffectedForm.devices',
                  ) && (
                    <Li>
                      <Trans id="whatHappenedPage.thinkAbout.devices" />
                    </Li>
                  )}
                  {whatWasAffected.affectedOptions.includes(
                    'whatWasAffectedForm.business_assets',
                  ) && (
                    <Li>
                      <Trans id="whatHappenedPage.thinkAbout.business" />
                    </Li>
                  )}
                </Ul>
              </Stack>

              <WhatHappenedForm
                onSubmit={(data) => {
                  dispatch({
                    type: 'saveFormData',
                    data: { whatHappened: data },
                  })
                  history.push(doneForms ? '/confirmation' : '/suspectclues')
                }}
              />
            </Stack>
          </Layout>
        </Page>
      )}
    />
  )
}
