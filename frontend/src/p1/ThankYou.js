/**@jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { H1, H2 } from '../components/header'
import { P } from '../components/paragraph'
import { A } from '../components/link'
import { TrackPageViews } from '../TrackPageViews'
import { ButtonsContainer } from '../components/buttons-container'
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
    <Text>
      <Ul>
        <Li>
          <Trans>
            Report directly to the website where the scam took place.
          </Trans>
        </Li>
        <Li>
          <Trans>
            Report to the financial institution where you sent money.
          </Trans>
        </Li>
        <Li>
          <Trans>
            Report to the credit bureaus,{' '}
            <A href="https://www.consumer.equifax.ca/personal/">Equifax</A> and{' '}
            <A href="https://www.transunion.ca/">TransUnion</A>, if your
            identity was stolen.
          </Trans>
        </Li>
      </Ul>
    </Text>
    <ButtonsContainer buttonLink={true} cancel={false} route="/p1/scaminfo" />
  </Layout>
)
