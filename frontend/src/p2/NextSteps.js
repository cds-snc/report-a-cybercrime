/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { H1, H3 } from '../components/header'
import { P } from '../components/paragraph'
import { Ul } from '../components/unordered-list'
import { Li } from '../components/list-item'
import { TrackPageViews } from '../TrackPageViews'
import { Layout } from '../components/layout'

export const NextSteps = () => (
  <Layout>
    <H1>
      <Trans>Thank you for submitting your report!</Trans>
    </H1>
    <P marginBottom="20px">
      <Trans>Confirmation number: #NC300234234</Trans>
    </P>

    <H3>
      <Trans>Next Steps</Trans>
    </H3>

    <P>
      <Trans>
        Based on the information you provided, this is what you can expect:
      </Trans>
    </P>
    <Ul>
      <Li>
        <Trans>Lorem ipsum delor sit amet</Trans>
      </Li>
      <Li>
        <Trans>Lorem ipsum delor sit amet</Trans>
      </Li>
    </Ul>

    <TrackPageViews />
  </Layout>
)
