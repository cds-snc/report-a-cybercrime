/**@jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { ButtonLink } from './components/link'
import { Container } from './components/container'
import { Layout } from './components/layout'

export const RootLandingPage = () => (
  <Layout>
    <Container
      display="flex"
      maxWidth={['200px', null, '300px']}
      flexDirection="row"
      justifyContent="space-between"
    >
      <ButtonLink width={['40px', null, '50px']} textAlign="center" to="/p1">
        <Trans>Prototype 1</Trans>
      </ButtonLink>
      <ButtonLink width={['40px', null, '50px']} textAlign="center" to="/p2">
        <Trans>Prototype 2</Trans>
      </ButtonLink>
    </Container>
  </Layout>
)
