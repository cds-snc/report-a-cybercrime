import React from 'react'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { Layout } from './components/layout'
import { Page } from './components/Page'

export const PageNotFound = () => (
  <Page>
    <Layout columns={{ base: 4 / 4, md: 6 / 8, lg: 7 / 12 }}>
      <H1>
        <Trans id="pageNotFound.header" />
      </H1>
      <P>
        <Trans id="pageNotFound.message" />
      </P>
    </Layout>
  </Page>
)
