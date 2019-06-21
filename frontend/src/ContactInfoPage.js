/** @jsx jsx */
import { jsx } from '@emotion/core'
// import { navigate } from '@reach/router'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'

import { TrackPageViews } from './TrackPageViews'
import { ContactInfoForm } from './forms/ContactInfoForm'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

const submitAndNavigate = (client, data) => {
  window.alert(JSON.stringify(data))
  // client.writeData({ data })
  // navigate('/form3')
}

export const ContactInfoPage = () => (
  <CenterContent>
    <H1>
      <Trans>Share your contact information</Trans>
    </H1>
    <TrackPageViews />
    <ContactInfoForm onSubmit={submitAndNavigate} />
  </CenterContent>
)
