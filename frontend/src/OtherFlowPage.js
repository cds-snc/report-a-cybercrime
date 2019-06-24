/** @jsx jsx */
import { jsx } from '@emotion/core'
// import { navigate } from '@reach/router'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'

import { TrackPageViews } from './TrackPageViews'
import { ContactedForm } from './forms/ContactedForm'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

const submitAndNavigate = (client, data) => {
  window.alert(JSON.stringify(data))
  // client.writeData({ data })
  // navigate('/form3')
}

export const OtherFlowPage = () => (
  <CenterContent>
    <H1>
      <Trans>Other flow</Trans>
    </H1>
    <TrackPageViews />
    <ContactedForm onSubmit={submitAndNavigate} />
  </CenterContent>
)
