/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { P } from '../components/paragraph'
import { A, Link } from '../components/link'
import { Ul } from '../components/unordered-list'
import { Li } from '../components/list-item'
import { InfoCard } from '../components/container'
import { TrackPageViews } from '../TrackPageViews'
import { Layout } from '../components/layout'
import { Container } from '../components/container'

export const NextSteps = () => (
  <Layout>
    <H1>
      <Trans>Thank you for reporting</Trans>
    </H1>
    <P>
      <Trans>
        <strong>We've sent you a confirmation email.</strong>
      </Trans>
    </P>
    <P>
      <Trans>
        Your reference number is <strong>#NC300234234</strong>. Keep this number
        for your records or to add more information later.
      </Trans>
    </P>
    <InfoCard>
      <P>
        <Trans>
          <strong>What happens next</strong>
        </Trans>
      </P>
      <P>
        <Trans></Trans>
      </P>
      <P>
        <Trans>
          The RCMP will analyze your report and combine it with others that are
          similar to help police across Canada track down cybercriminals. Police
          does not follow up with everyone who submits a report.
        </Trans>
      </P>
      <P>
        <Trans>
          <strong>Where you can get help</strong>
        </Trans>
      </P>
      <Ul>
        <Li>
          <Trans>
            <A href="http://www.rcmp-grc.gc.ca/ccaps-spcca/vic-eng.htm">
              Talk to someone and get support
            </A>
          </Trans>
        </Li>
        <Li>
          <Trans>
            <A href="http://www.rcmp-grc.gc.ca/to-ot/tis-set/cyber-tips-conseils-eng.htm">
              Find tips to protect yourself in the future
            </A>
          </Trans>
        </Li>
        <Li>
          <Trans>
            <A href="http://www.antifraudcentre.ca/index-eng.htm">
              Follow what scams are trending
            </A>
          </Trans>
        </Li>
      </Ul>
    </InfoCard>
    <br></br>
    <P>
      <Trans>
        <strong>You have other reporting options</strong>
      </Trans>
    </P>
    <Ul>
      <Li>
        <Trans>Report directly to the place where the scam happened.</Trans>
      </Li>
      <Li>
        <Trans>Report to your financial institution, if you lost money.</Trans>
      </Li>
      <Li>
        <Trans>
          Report to the credit bureaus,{' '}
          <A href="https://www.consumer.equifax.ca/personal/">Equifax</A> and{' '}
          <A href="https://www.transunion.ca/">TransUnion</A>, if your identity
          was stolen.
        </Trans>
      </Li>
    </Ul>
    <TrackPageViews />
    <Container
      width="305px"
      marginTop={[1, null, 1]}
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}
    >
      <Link type="button" to="/p2/" textAlign="center">
        <Trans>Report again</Trans>
      </Link>
    </Container>
  </Layout>
)
