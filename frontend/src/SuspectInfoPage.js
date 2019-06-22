/** @jsx jsx */
import { jsx } from '@emotion/core'
// import { navigate } from '@reach/router'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'

import { TrackPageViews } from './TrackPageViews'
import { SuspectInfo } from './forms/SuspectInfo'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

const submitAndNavigate = (client, data) => {
  window.alert(JSON.stringify(data))
  // client.writeData({ data })
  // navigate('/form3')
}

export const SuspectInfoPage = () => (
  <CenterContent>
    <H1>
      <Trans>Suspect Information</Trans>
    </H1>
    <TrackPageViews />
    <SuspectInfo onSubmit={submitAndNavigate} />
  </CenterContent>
)
