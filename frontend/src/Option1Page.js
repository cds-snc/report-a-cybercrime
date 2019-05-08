import React from 'react'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1, H2 } from './components/header'
import { P } from './components/paragraph'
import { Ul } from './components/unordered-list'
import { Li } from './components/list-item'
import { TrackPageViews } from './TrackPageViews'
import { Container } from './components/container'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

export const Option1Page = () => (
  <CenterContent>
    <TrackPageViews />
    <H1 textAlign="center">
      <Trans>Call 911</Trans>
    </H1>
    <Container>
      <Container marginTop={[3, null, 5]}>
        <H2 fontSize={[3, null, 4]}>
          <Trans>You will get:</Trans>
        </H2>
        <P>
          <Ul>
            <Li>
              <Trans>Local, immediate response</Trans>
            </Li>
          </Ul>
        </P>
      </Container>
    </Container>
  </CenterContent>
)
