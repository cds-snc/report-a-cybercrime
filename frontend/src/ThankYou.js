/**@jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1, H2 } from './components/header'
import { P } from './components/paragraph'
import { A } from './components/link'
import { TrackPageViews } from './TrackPageViews'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`
export const ThankYou = () => (
  <CenterContent>
    <TrackPageViews />
    <H1 fontSize={[5, null, 6]}>
      <Trans>Thank you for reporting</Trans>
    </H1>
    <P fontSize={[4, null, 5]}>
      <Trans>
        <strong>The RCMP has received your report.</strong>
      </Trans>
    </P>
    <P>
      <Trans>
        An analyst will assess the information, combine it with other reports,
        and decide whether the report can become a police investigation.
      </Trans>
    </P>
    <P>
      <Trans>
        If your report becomes an investigation, a local police officer may be
        in touch to get more information.
      </Trans>
    </P>
    <H2 fontSize={[4, null, 5]}>
      <Trans>You may also want to report to:</Trans>
    </H2>
    <P>
      <ul>
        <li>The service provider where the scam took place</li>
        <li>Your financial institution, if you lost money</li>
        <li>
          <A href="https://www.consumer.equifax.ca/personal/">Equifax</A> and{' '}
          <A href="https://www.transunion.ca/">TransUnion</A>, if your identity
          was stolen.
        </li>
      </ul>
    </P>
  </CenterContent>
)
