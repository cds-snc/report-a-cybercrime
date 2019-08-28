/**@jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { ButtonLink } from './components/link'
import { ButtonsContainerLanding } from './components/buttons-container'
import { Container } from './components/container'
import { Layout } from './components/layout'

export const RootLandingPage = () => (
  <Layout maxWidth={['300px', null, '400px']}>
    <ButtonsContainerLanding />
  </Layout>
)
