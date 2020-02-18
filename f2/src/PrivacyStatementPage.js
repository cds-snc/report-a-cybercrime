import React from 'react'
import { Trans } from '@lingui/macro'
import { H1, H2 } from './components/header'
import { P } from './components/paragraph'
import { Layout } from './components/layout'
import { TrackPageViews } from './TrackPageViews'
import { Stack } from '@chakra-ui/core'

export const PrivacyStatementPage = () => {
  return (
    <Layout>
      <TrackPageViews />
      <Stack spacing={10} shouldWrapChildren>
        <H1 as="span">
          <Trans id="privacyStatementPage.title" />
        </H1>
        <H2 as="span">
          <Trans id="privacyStatementPage.whoHeading" />
        </H2>
        <P>
          <Trans id="privacyStatementPage.whoText1" />
        </P>
        <P>
          <Trans id="privacyStatementPage.whoText2" />
        </P>
        <H2 as="span">
          <Trans id="privacyStatementPage.whathappensHeading" />
        </H2>
        <P>
          <Trans id="privacyStatementPage.whathappensText" />
        </P>
        <H2 as="span">
          <Trans id="privacyStatementPage.informationHeading" />
        </H2>
        <P>
          <Trans id="privacyStatementPage.informationText1" />
        </P>
        <P>
          <Trans id="privacyStatementPage.informationText2" />
        </P>
        <H2 as="span">
          <Trans id="privacyStatementPage.toinquireHeading" />
        </H2>
        <P>
          <Trans id="privacyStatementPage.toinquireText1" />
        </P>
        <P>
          <Trans id="privacyStatementPage.toinquireText2" />
        </P>
        <P>
          <Trans id="privacyStatementPage.toinquireText3" />
        </P>
      </Stack>
    </Layout>
  )
}
