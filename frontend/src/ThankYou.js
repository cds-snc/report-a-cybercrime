/**@jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { H1, H2 } from './components/header'
import { P } from './components/paragraph'
import { A, ButtonLink } from './components/link'
import { TrackPageViews } from './TrackPageViews'
import { Steps } from './components/stepper'
import { Container } from './components/container'
import { Layout } from './components/layout'
import { Ul } from './components/unordered-list'
import { Li } from './components/list-item'
import { Text } from './components/text'

export const ThankYou = () => (
  <Layout>
    <TrackPageViews />
    <Container
      display="flex"
      width="90%"
      flexDirection="row"
      marginBottom="20px"
    >
      <Steps activeStep={4} />
    </Container>
    <H1>
      <Trans>Thank you for reporting</Trans>
    </H1>
    <P fontSize={[4, null, 5]}>
      <Trans>
        <strong>NC3 has received your report.</strong>
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
    <Container
      width="305px"
      marginTop={[1, null, 1]}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <ButtonLink type="submit" to="/" textAlign="center">
        <Trans> Report another scam</Trans>
      </ButtonLink>
    </Container>
  </Layout>
)
