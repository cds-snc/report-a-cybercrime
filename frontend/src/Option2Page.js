import React from 'react'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1, H2 } from './components/header'
import { Ul } from './components/unordered-list'
import { Li } from './components/list-item'
import { TrackPageViews } from './TrackPageViews'
import { Container } from './components/container'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

export const Option2Page = () => (
  <CenterContent>
    <TrackPageViews />
    <H1 textAlign="center">
      <Trans>You can call the Canadian Anti-Fraud Centre</Trans>
      <br />
      <br />
      1-888-495-8501
    </H1>
    <Container>
      <Container marginTop={[3, null, 5]}>
        <H2 fontSize={[3, null, 4]}>
          <Trans>You will get:</Trans>
        </H2>
        <Ul>
          <Li>
            <Trans>specific advice based on your situation</Trans>
          </Li>
        </Ul>
      </Container>
    </Container>
  </CenterContent>
)
