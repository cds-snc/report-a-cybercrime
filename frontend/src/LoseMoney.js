/**@jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { ButtonLink } from './components/link'
import { TrackPageViews } from './TrackPageViews'
import { Container } from './components/container'
import { Steps } from './components/stepper'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

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
  <CenterContent>
    <TrackPageViews />
    <Container css={topBarContainer}>
      <Steps activeStep={1} />
    </Container>
    <H1>
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
  </CenterContent>
)
