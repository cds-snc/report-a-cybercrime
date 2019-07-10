/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { Container } from './components/container'
import { Steps } from './components/stepper'
import { P } from './components/paragraph'
import { TrackPageViews } from './TrackPageViews'
import { SuspectInfoForm } from './forms/SuspectInfoForm'
import { Layout } from './components/layout'

const topBarContainer = css`
  display: flex;
  width: 90%;
  flex-direction: row;
  margin-bottom: 20px;
`

const submitAndNavigate = (client, data) => {
  client.writeData({ data })
  navigate('/uploadfilesquestion')
}

export const SuspectInfoPage = () => (
  <Layout>
    <Container css={topBarContainer}>
      <Steps
        activeStep={2}
        steps={[{ href: '/scaminfo' }, { href: '/moneylost' }, {}, {}, {}]}
      />
    </Container>
    <H1>
      <Trans>Add scammer details</Trans>
    </H1>
    <P>
      <Trans>
        Any clues about who might be responsible can help police identify
        suspects.
      </Trans>
    </P>
    <TrackPageViews />
    <SuspectInfoForm onSubmit={submitAndNavigate} />
  </Layout>
)
