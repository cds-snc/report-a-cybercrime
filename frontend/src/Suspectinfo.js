/**@jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { ButtonLink } from './components/link'
import { TrackPageViews } from './TrackPageViews'
import { Container } from './components/container'
import { Steps } from './components/stepper'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: AudioTrack;
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

export const Suspectinfo = () => (
  <CenterContent>
    <TrackPageViews />
    <Container css={topBarContainer}>
      <Steps activeStep={2} />
    </Container>
    <H1 fontSize={[5, null, 6]}>
      <Trans>Do you have information about the suspect</Trans>
    </H1>

    <Container css={bottomBarContainer}>
      <ButtonLink mb={[3, null, 5]} to="/suspectinfo">
        <Trans>Yes</Trans>
      </ButtonLink>
      <ButtonLink mb={[3, null, 5]} to="/uploadfilesquestion">
        <Trans>No</Trans>
      </ButtonLink>
    </Container>
  </CenterContent>
)
