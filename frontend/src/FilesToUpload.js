/**@jsx jsx */
import { jsx, css } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { ButtonLink } from './components/link'
import { TrackPageViews } from './TrackPageViews'
import { Container } from './components/container'
import { Steps } from './components/stepper'
import Layout from './Layout'

const bottomBarContainer = css`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`
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
      <Trans>Upload suppporting files</Trans>
    </H1>
    <P>
      <Trans>
        Do you have any documents, images, screenshots, or receipts?
      </Trans>
    </P>
    <Container css={bottomBarContainer}>
      <ButtonLink mb={[3, null, 5]} to="/uploadfiles">
        <Trans>Yes</Trans>
      </ButtonLink>
      <ButtonLink mb={[3, null, 5]} to="/contactinfoquestion">
        <Trans>No</Trans>
      </ButtonLink>
    </Container>
  </Layout>
)
