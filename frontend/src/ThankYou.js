/**@jsx jsx */
import { jsx, css } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { H1, H2 } from './components/header'
import { P } from './components/paragraph'
import { A, ButtonLink } from './components/link'
import { TrackPageViews } from './TrackPageViews'
import { Steps } from './components/stepper'
import { Container } from './components/container'
import { Layout } from './components/layout'

const topBarContainer = css`
  display: flex;
  width: 90%;
  flex-direction: row;
  margin-bottom: 20px;
`

export const ThankYou = () => (
  <Layout>
    <TrackPageViews />
    <Container css={topBarContainer}>
      <Steps activeStep={4} />
    </Container>
    <H1>
      <Trans>Thank you for reporting</Trans>
    </H1>
    <P fontSize={[4, null, 5]}>
      <Trans>
        <strong>
          You&apos;re not the only one being affected by this scam.
        </strong>
      </Trans>
    </P>
    <P>
      <Trans>NC3 has received your report.</Trans>
    </P>
    <P>
      <Trans>
        An analyst will now assess the information and combine it with other
        reports to help protect others or help police catch scammers.
      </Trans>
    </P>
    <H2 fontSize={[4, null, 5]}>
      <Trans>You may also want to:</Trans>
    </H2>
    <P>
      <ul>
        <li>
          <Trans>
            Report directly to the website where the scam took place.
          </Trans>
        </li>
        <br />
        <li>
          <Trans>
            Report to the financial institution where you sent money.
          </Trans>
        </li>
        <br />
        <li>
          <Trans>
            Report to the credit bureaus,{' '}
            <A href="https://www.consumer.equifax.ca/personal/">Equifax</A> and{' '}
            <A href="https://www.transunion.ca/">TransUnion</A>, if your
            identity was stolen.
          </Trans>
        </li>
      </ul>
    </P>
    <Container
      maxWidth="300px"
      marginTop={[2, null, 3]}
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}
    >
      <Container
        width="305px"
        marginTop={[1, null, 1]}
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        `}
      >
        <ButtonLink type="submit" to="/" textAlign="center">
          <Trans>Report another scam </Trans>
        </ButtonLink>
      </Container>
    </Container>
  </Layout>
)
