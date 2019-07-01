/**@jsx jsx */
import { jsx, css } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
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

export const LoseMoney = () => (
  <Layout>
    <TrackPageViews />
    <Container css={topBarContainer}>
      <Steps activeStep={1} />
    </Container>
    <H1 fontSize={[5, null, 6]}>
      <Trans>Specify money lost</Trans>
    </H1>
    <P>
      <Trans>Did you lose money as a result of the scam?</Trans>
    </P>
    <Container css={bottomBarContainer}>
      <ButtonLink mb={[3, null, 5]} to="/moneylost">
        <Trans>Yes</Trans>
      </ButtonLink>
      <ButtonLink mb={[3, null, 5]} to="/suspectinfoquestion">
        <Trans>No</Trans>
      </ButtonLink>
    </Container>
  </Layout>
)
