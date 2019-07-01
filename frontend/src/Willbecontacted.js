/**@jsx jsx */
import { jsx, css } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { ButtonLink } from './components/link'
import { TrackPageViews } from './TrackPageViews'
import { Container } from './components/container'
import { Steps } from './components/stepper'
import Layout from './Layout'

const bottomBarContainer = css`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`
const topBarContainer = css`
  display: flex;
  width: 90%;
  flex-direction: row;
  margin-bottom: 20px;
`

export const Willbecontacted = () => (
  <Layout>
    <TrackPageViews />
    <Container css={topBarContainer}>
      <Steps activeStep={4} />
    </Container>
    <H1 fontSize={[5, null, 6]}>
      <Trans>
        If the police need more information, would you like to be contacted
      </Trans>
    </H1>

    <Container css={bottomBarContainer}>
      <ButtonLink mb={[3, null, 5]} to="/contactinfo">
        <Trans>Yes</Trans>
      </ButtonLink>
      <ButtonLink mb={[3, null, 5]} to="/confirmation">
        <Trans>No</Trans>
      </ButtonLink>
    </Container>
  </Layout>
)
