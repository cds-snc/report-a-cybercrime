/** @jsx jsx */
import { jsx } from '@emotion/core'
import { navigate } from '@reach/router'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { TrackPageViews } from './TrackPageViews'
import { SuspectInfoForm } from './forms/SuspectInfoForm'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

const submitAndNavigate = (client, data) => {
  client.writeData({ data })
  navigate('/moneylostquestion')
}

export const SuspectInfoPage = () => (
  <CenterContent>
    <H1>
      <Trans>Add scammer details</Trans>
    </H1>
    <P>
      <Trans>
        Any clues about who might be responsible can help police identify
        suspects.
      </Trans>
    </P>
    <TrackPageViews />
    <SuspectInfoForm onSubmit={submitAndNavigate} />
  </CenterContent>
)
