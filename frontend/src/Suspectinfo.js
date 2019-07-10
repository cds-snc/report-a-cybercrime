/**@jsx jsx */
import { jsx, css } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { ButtonLink } from './components/link'
import { TrackPageViews } from './TrackPageViews'
import { Container } from './components/container'
import { Steps } from './components/stepper'
import { Layout } from './components/layout'

const topBarContainer = css`
  display: flex;
  width: 90%;
  flex-direction: row;
  margin-bottom: 20px;
`

export const Suspectinfo = () => (
  <Layout>
    <TrackPageViews />
    <Container css={topBarContainer}>
      <Steps
        activeStep={2}
        steps={[{ href: '/scaminfo' }, { href: '/moneylost' }, {}, {}, {}]}
      />
    </Container>
    <H1>
      <Trans>Add scammer details</Trans>
    </H1>
    <P>
      <Trans>
        Do you have any information about who might be responsible for the scam?
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
        to="/suspectinfo"
      >
        <Trans>Yes</Trans>
      </ButtonLink>
      <ButtonLink
        width={['40px', null, '50px']}
        textAlign="center"
        to="/uploadfilesquestion"
      >
        <Trans>No</Trans>
      </ButtonLink>
    </Container>
  </Layout>
)
