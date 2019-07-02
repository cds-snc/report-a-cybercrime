/**@jsx jsx */
import { jsx, css } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
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

export const Willbecontacted = () => (
  <Layout>
    <TrackPageViews />
    <Container css={topBarContainer}>
      <Steps activeStep={4} />
    </Container>
    <H1>
      <Trans>
        If the police need more information, would you like to be contacted
      </Trans>
    </H1>

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
        to="/contactinfo"
      >
        <Trans>Yes</Trans>
      </ButtonLink>
      <ButtonLink
        width={['40px', null, '50px']}
        textAlign="center"
        to="/confirmation"
      >
        <Trans>No</Trans>
      </ButtonLink>
    </Container>
  </Layout>
)
