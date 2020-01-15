/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { Lead } from './components/lead'
import { Ul } from './components/unordered-list'
import { Li } from './components/list-item'
import { TrackPageViews } from './TrackPageViews'
import { EvidenceInfoForm } from './forms/EvidenceInfoForm'
import { Layout } from './components/layout'
import { BackButton } from './components/backbutton'
import { Stack, Box } from '@chakra-ui/core'
import { useStateValue } from './utils/state'

export const EvidencePage = () => {
  const [data, dispatch] = useStateValue()
  const { doneForms } = data

  return (
    <Route
      render={({ history }) => (
        <Layout>
          <TrackPageViews />
          <Stack spacing={10} shouldWrapChildren>
            <BackButton route="/suspectclues">
              <Trans id="evidencePage.backButton" />
            </BackButton>

            <Stack spacing={4} role="heading" aria-level="1">
              <H1 as="span">
                <Trans id="evidencePage.title" />
              </H1>
            </Stack>
            <Box>
              <Lead>
                <Trans id="evidencePage.details" />
              </Lead>
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
            <P>
                <Trans id="evidencePage.intro" />
              </P>

            <EvidenceInfoForm
              onSubmit={data => {
                dispatch({ type: 'saveFormData', data: { evidence: data } })
                history.push(doneForms ? '/confirmation' : '/location')
              }}
            />
          </Stack>
        </Layout>
      )}
    />
  )
}
