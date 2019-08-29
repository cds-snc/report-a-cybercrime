/**@jsx jsx */
import { jsx } from '@emotion/core'
import { ButtonsContainerLanding } from './components/buttons-container'
import { Layout } from './components/layout'

export const RootLandingPage = () => (
  <Layout maxWidth={['300px', null, '400px']}>
    <ButtonsContainerLanding />
  </Layout>
)
