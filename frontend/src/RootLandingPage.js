/**@jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { ButtonsContainerLanding } from './components/buttons-container'
import { Layout } from './components/layout'
import { H1 } from './components/header'

export const RootLandingPage = () => (
  <Layout maxWidth={['300px', null, '400px']}>
    <H1>
      <Trans>Report a scam</Trans>
    </H1>
    <ButtonsContainerLanding />
  </Layout>
)
