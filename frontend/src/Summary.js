/** @jsx jsx */
import { Stats } from './Stats'
import { TrackPageViews } from './TrackPageViews'
import { jsx } from '@emotion/core'
import { Container } from './components/container'
import { Trans } from '@lingui/macro'
import { H1, H2 } from './components/header'
import { P } from './components/paragraph'
import { ButtonLink } from './components/link'

export const Summary = () => (
  <Container mx={'auto'} width={[1, 1, 1]}>
    <H1 fontSize={[5, null, 6]}>
      <Trans>Thank you for sharing.</Trans>
    </H1>

    <H2 fontSize={[3, null, 4]}>
      <Trans>You‘re the 10th person to help us with this.</Trans>
    </H2>

    <Stats />

    <P>
      <Trans>
        Everything we learn from people like you can help stop this from
        happening again. You can help us stop cybercrime and fraud by sharing
        this site with others.
      </Trans>
    </P>
    <TrackPageViews />

    <ButtonLink mb={[3, null, 5]} to="/">
      <Trans>Submit another</Trans>
    </ButtonLink>
  </Container>
)
