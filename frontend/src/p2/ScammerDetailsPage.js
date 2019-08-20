/** @jsx jsx */
import { jsx } from '@emotion/core'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { P } from '../components/paragraph'
import { Container } from '../components/container'
import { Steps } from '../components/stepper'
import { TrackPageViews } from '../TrackPageViews'
import { ScammerDetailsForm } from './forms/ScammerDetailsForm'
import { Layout } from '../components/layout'
import { getDoneForms } from '../utils/queriesAndMutations'
import { ButtonLink } from '../components/link'
import { css } from '@emotion/core'

const submitAndNavigate = (client, data) => {
  client.writeData({ data: { scammerDetails: JSON.stringify(data) } })
  navigate(getDoneForms(client) ? 'confirmation' : 'impact')
}

export const ScammerDetailsPage = () => {
  return (
    <Layout>
      <Container
        display="flex"
        width="90%"
        flexDirection="row"
        marginBottom="20px"
      >
        <Steps activeStep={2} steps={[{}, {}, {}, {}, {}, {}]} />
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
        <ButtonLink
          type="button"
          color="black"
          to="/p2/whathappened"
          textAlign="left"
        >
          <Trans>&#8678; Back </Trans>
        </ButtonLink>
      </Container>
      <H1>
        <Trans>About the scammer</Trans>
      </H1>
      <P fontSize={[4, null, 5]} fontWeight="bold">
        <Trans>
          Scammers often hide behind their screens. Any clues can help police
          track down the scammers responsible for these crimes.
        </Trans>
      </P>
      <TrackPageViews />
      <ScammerDetailsForm onSubmit={submitAndNavigate} />
    </Layout>
  )
}
