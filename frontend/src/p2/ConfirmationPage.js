/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { Container } from '../components/container'
import { TrackPageViews } from '../TrackPageViews'
import { Steps } from '../components/stepper'
import { Layout } from '../components/layout'
import { P } from '../components/paragraph'
import {
  getTimeFrame,
  getWhatHappened,
  getScammerDetails,
  getTellUsMore,
  getImpact,
  getP2ContactInfo,
} from '../utils/queriesAndMutations'
import { ConfirmationSummary } from './ConfirmationSummary'
import { ConfirmationForm } from './forms/ConfirmationForm'
import { Link } from '../components/link'

const submit = (client, submitReportP2) => {
  const data = {
    source: 'p2',
    timeFrame: getTimeFrame(client),
    whatHappened: getWhatHappened(client),
    impact: getImpact(client),
    scammerDetails: getScammerDetails(client),
    contactInfo: getP2ContactInfo(client),
    tellUsMore: getTellUsMore(client),
  }
  submitReportP2({ variables: data }) // currently fails, need new mutation
  navigate('nextsteps')
}

export const ConfirmationPage = () => {
  return (
    <Layout>
      <TrackPageViews />
      <Container
        display="flex"
        width="90%"
        flexDirection="row"
        marginBottom="20px"
      >
        <Steps activeStep={5} steps={[{}, {}, {}, {}, {}, {}]} />

      </Container>

      <Container
        width="105px"
        marginTop={[1, null, 1]}
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        `}
      >
        <Link type="button" color="black" to="/p2/contactinfo" textAlign="left">
          <Trans>&#8678; Back </Trans>
        </Link>


      </Container>
      <H1>
        <Trans>Review your report</Trans>
      </H1>
      <P>
        <Trans>
          The more detail you give, the more likely it will be investigated.
        </Trans>
      </P>
      <ConfirmationSummary />
      <ConfirmationForm onSubmit={submit} />
    </Layout>
  )
}
