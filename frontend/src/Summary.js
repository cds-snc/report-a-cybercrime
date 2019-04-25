/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Stats } from './Stats'
import { Chart } from './Chart'
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
      <Trans>Thank you for reporting.</Trans>
    </H1>

    <Stats
      identifier="555-555-5555"
      startDate="2019-04-01"
      endDate="2019-04-20"
    >
      {({ summary }) => (
        <>
          <H2 fontSize={[3, null, 4]}>
            <Trans>You‘re the 12th person to help us with this scam.</Trans>
          </H2>
          <Chart data={summary} />
        </>
      )}
    </Stats>

    <P>
      <Trans>
        Everything we learn from people like you can help stop scams like this
        from happening.
      </Trans>
    </P>
    <TrackPageViews />
    <ButtonLink mb={[3, null, 5]} to="/">
      <Trans>Report another scam</Trans>
    </ButtonLink>
  </Container>
)
