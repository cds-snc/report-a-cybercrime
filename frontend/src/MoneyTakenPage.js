/** @jsx jsx */
import { jsx } from '@emotion/core'
// import { navigate } from '@reach/router'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'

import { TrackPageViews } from './TrackPageViews'
import { MoneyTaken } from './forms/MoneyTaken'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

const submitAndNavigate = (client, data) => {
  window.alert(JSON.stringify(data))
  // client.writeData({ data })
  // navigate('/form3')
}

export const MoneyTakenPage = () => (
  <CenterContent>
    <H1>
      <Trans>Money Taken</Trans>
    </H1>
    <TrackPageViews />
    <MoneyTaken onSubmit={submitAndNavigate} />
  </CenterContent>
)
