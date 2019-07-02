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

export const FilesToUpload = () => (
  <Layout>
    <Container css={topBarContainer}>
      <Steps activeStep={3} />
    </Container>
    <TrackPageViews />
    <H1 fontSize={[5, null, 6]}>
      <Trans>Upload supporting files</Trans>
    </H1>
    <P>
      <Trans>
        Do you have any documents, images, screenshots, or receipts?
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
        to="/uploadfiles"
      >
        <Trans>Yes</Trans>
      </ButtonLink>
      <ButtonLink
        width={['40px', null, '50px']}
        textAlign="center"
        to="/contactinfoquestion"
      >
        <Trans>No</Trans>
      </ButtonLink>
    </Container>
  </Layout>
)
