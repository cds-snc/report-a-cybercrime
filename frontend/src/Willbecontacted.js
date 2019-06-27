/**@jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { ButtonLink } from './components/link'
import { TrackPageViews } from './TrackPageViews'
import { Container } from './components/container'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: AudioTrack;
`

const bottomBarContainer = css`
  display: flex;
  width: 50%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const Willbecontacted = () => (
  <CenterContent>
    <TrackPageViews />
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
  </CenterContent>
)
