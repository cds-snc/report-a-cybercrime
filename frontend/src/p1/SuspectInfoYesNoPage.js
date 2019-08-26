/**@jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { P } from '../components/paragraph'
import { ButtonLink } from '../components/link'
import { TrackPageViews } from '../TrackPageViews'
import { Container } from '../components/container'
import { Steps } from '../components/stepper'
import { Layout } from '../components/layout'

export const Suspectinfo = () => (
  <Layout>
    <TrackPageViews />
    <Container
      display="flex"
      width="90%"
      flexDirection="row"
      marginBottom="20px"
    >
      <Steps activeStep={2} steps={[{}, {}, {}, {}, {}]} />
    </Container>
    <H1>
      <Trans>Add suspect clues</Trans>
    </H1>
    <P>
      <Trans>
        Do you have any information about where the scam came from or how the
        scammer contacted you?
      </Trans>
    </P>

    <Container
      display="flex"
      maxWidth={['200px', null, '300px']}
      flexDirection="row"
      justifyContent="space-between"
      marginBottom=""
    >
      <ButtonLink
        width={['40px', null, '50px']}
        textAlign="center"
        to="/p1/suspectinfo"
      >
        <Trans>Yes</Trans>
      </ButtonLink>
      <ButtonLink
        width={['40px', null, '50px']}
        textAlign="center"
        to="/p1/uploadfilesquestion"
      >
        <Trans>No</Trans>
      </ButtonLink>
    </Container>
  </Layout>
)
