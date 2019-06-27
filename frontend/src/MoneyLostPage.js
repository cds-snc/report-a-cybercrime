/** @jsx jsx */
import { jsx } from '@emotion/core'
import { navigate } from '@reach/router'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'

import { TrackPageViews } from './TrackPageViews'
import { MoneyLostForm } from './forms/MoneyLostForm'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

const submitAndNavigate = (client, data) => {
  client.writeData({ data })
  navigate('/uploadfilesquestion')
}

export const MoneyLostPage = () => (
  <CenterContent>
    <H1>
      <Trans>Specify money lost.</Trans>
    </H1>
    <TrackPageViews />
    <MoneyLostForm onSubmit={submitAndNavigate} />
  </CenterContent>
)
