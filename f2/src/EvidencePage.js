/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P, Lead } from './components/paragraph'
import { Ul } from './components/unordered-list'
import { Li } from './components/list-item'
import { EvidenceInfoForm } from './forms/EvidenceInfoForm'
import { Layout } from './components/layout'
import { BackButton } from './components/backbutton'
import { Stack, Box } from '@chakra-ui/core'
import { useStateValue } from './utils/state'
import { Page } from './components/Page'

export const EvidencePage = () => {
  const [data, dispatch] = useStateValue()
  const { doneForms } = data

  return (
    <Route
      render={({ history }) => (
        <Page>
          <Layout columns={{ base: 4 / 4, md: 6 / 8, lg: 7 / 12 }}>
            <Stack spacing={10} shouldWrapChildren>
              <BackButton />
              <H1>
                <Trans id="evidencePage.title" />
              </H1>

              <Lead>
                <Trans id="evidencePage.intro" />
              </Lead>
              <Box>
                <P>
                  <Trans id="evidencePage.details" />
                </P>
                <Ul>
                  <Li>
                    <Trans id="evidencePage.detail1" />
                  </Li>{' '}
                  <Li>
                    <Trans id="evidencePage.detail2" />
                  </Li>
                  <Li>
                    <Trans id="evidencePage.detail3" />
                  </Li>
                </Ul>
              </Box>

              <EvidenceInfoForm
                onSubmit={data => {
                  dispatch({ type: 'saveFormData', data: { evidence: data } })
                  history.push(doneForms ? '/confirmation' : '/location')
                }}
              />
            </Stack>
          </Layout>
        </Page>
      )}
    />
  )
}
