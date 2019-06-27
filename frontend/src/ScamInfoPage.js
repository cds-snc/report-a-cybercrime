/** @jsx jsx */
import { jsx } from '@emotion/core'
import { navigate } from '@reach/router'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'

import { TrackPageViews } from './TrackPageViews'
import { ScamInfoForm } from './forms/ScamInfoForm'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

const submitAndNavigate = (client, data) => {
  client.writeData({ data })
  navigate('/suspectinfoquestion')
}

export const ScamInfoPage = () => (
  <CenterContent>
    <H1>
      <Trans>Describe the scam.</Trans>
    </H1>
    <TrackPageViews />
    <ScamInfoForm onSubmit={submitAndNavigate} />
  </CenterContent>
)
