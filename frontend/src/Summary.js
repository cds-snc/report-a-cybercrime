/** @jsx jsx */
import { Stats } from './Stats'
import { TrackPageViews } from './TrackPageViews'
import { jsx } from '@emotion/core'
import { Container } from './components/container'
import { Trans } from '@lingui/macro'
import { H1, H2 } from './components/header'
import { P } from './components/paragraph'
import { Button } from './components/button'

export const Summary = () => (
  <Container mx={'auto'} width={[1, 1, 1]}>
    <H1 fontSize={[5, null, 6]}>
      <Trans>Thank you for reporting.</Trans>
    </H1>

    <H2 fontSize={[3, null, 4]}>
      <Trans>You‘re the 12th person to help us with this scam.</Trans>
    </H2>

    <Stats />

    <P>
      <Trans>
        Everything we learn from people like you can help stop scams like this
        from happening.
      </Trans>
    </P>
    <TrackPageViews />

    <Button
      mb={[3, null, 5]}
      onClick={() => {
        window.location.href = '/'
      }}
      value="Report again"
    >
      <Trans>Report again</Trans>
    </Button>
  </Container>
)
