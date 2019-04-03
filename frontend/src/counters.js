import React from 'react'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { Container } from './components/container'
import { H1, H2 } from './components/header'
import { P, Lead } from './components/paragraph'
import { Ol } from './components/ordered-list'
import { Li } from './components/list-item'
import { Query } from 'react-apollo'
import { GET_LANGUAGE_QUERY } from './utils/queriesAndMutations'
import { TrackPageViews } from './TrackPageViews'
import { jsx, css } from '@emotion/core'

export const Counters = () => (
  <Container>
    <Container>
      <P>
        14 <Trans>Phone numbers</Trans>
      </P>
    </Container>
    <Container>
      <P>30</P>
    </Container>
  </Container>
)
