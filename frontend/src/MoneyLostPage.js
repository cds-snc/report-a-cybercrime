/** @jsx jsx */
import { jsx } from '@emotion/core'
// import { navigate } from '@reach/router'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'

import { TrackPageViews } from './TrackPageViews'
import { MoneyLost } from './forms/MoneyLost'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

const submitAndNavigate = (client, data) => {
  window.alert(JSON.stringify(data))
  // client.writeData({ data })
  // navigate('/form3')
}

export const MoneyLostPage = () => (
  <CenterContent>
    <H1>
      <Trans>Money Lost</Trans>
    </H1>
    <TrackPageViews />
    <MoneyLost onSubmit={submitAndNavigate} />
  </CenterContent>
)
