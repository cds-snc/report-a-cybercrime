/**@jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { P } from '../components/paragraph'
import { ButtonLink } from '../components/link'
import { TrackPageViews } from '../TrackPageViews'
import { Container } from '../components/container'
import { Layout } from '../components/layout'

export const ThankYou = () => (
  <Layout>
    <TrackPageViews />
    <H1>
      <Trans>Thank you for reporting</Trans>
    </H1>
    <P>
      <Trans>
        The RCMP&apos;s National Cybercrime Coordination Unit has received your
        report.
      </Trans>
    </P>
    <P>
      <Trans>
        An analyst will assess the information and combine it with other reports
        to help police catch scammers.
      </Trans>
    </P>
    <Container
      width="305px"
      marginTop={[1, null, 1]}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <ButtonLink type="submit" to="/p1" textAlign="center">
        <Trans> Report another scam</Trans>
      </ButtonLink>
    </Container>
  </Layout>
)
