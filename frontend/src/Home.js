import React from 'react'
import { Router } from '@reach/router'
import styled from '@emotion/styled'
import { Summary } from './Summary'
import { PageNotFound } from './PageNotFound'
import { Page1 } from './Page1'
import { Page2 } from './Page2'
import { FileUploadPage } from './FileUpload'
import { SelectReport } from './selectReport'

const Root = styled('div')`
  margin: 20pt;
`

const Screen = styled('div')`
  margin-top: 30pt;
`

export const Home = () => (
  <Root>
    <Screen>
      <Router>
        <PageNotFound default />
        <SelectReport path="/" />
        <FileUploadPage path="/file" />
        <Page1 path="/scam" />
        <Page2 path="/flag" />
        <Summary path="/summary/:identifier" />
      </Router>
    </Screen>
  </Root>
)
