/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { navigate } from '@reach/router'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { Container } from './components/container'
import { Steps } from './components/stepper'
import { TrackPageViews } from './TrackPageViews'
import { SuspectInfoForm } from './forms/SuspectInfoForm'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

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
  <CenterContent>
    <Container css={topBarContainer}>
      <Steps activeStep={2} />
    </Container>
    <H1>
      <Trans>Add scammer details.</Trans>
    </H1>
    <TrackPageViews />
    <SuspectInfoForm onSubmit={submitAndNavigate} />
  </CenterContent>
)
