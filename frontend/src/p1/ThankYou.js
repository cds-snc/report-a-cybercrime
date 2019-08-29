/**@jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { H1, H2 } from '../components/header'
import { P } from '../components/paragraph'
import { A, ButtonLink } from '../components/link'
import { TrackPageViews } from '../TrackPageViews'
import { Container } from '../components/container'
import { Layout } from '../components/layout'
import { Ul } from '../components/unordered-list'
import { Li } from '../components/list-item'
import { Text } from '../components/text'

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
        An analyst will now assess the information and combine it with other
        reports to help police catch scammers.
      </Trans>
    </P>
    <H2 fontSize={[4, null, 5]}>
      <Trans>You may also want to:</Trans>
    </H2>
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
