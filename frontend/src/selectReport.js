import React from 'react'
import styled from '@emotion/styled'
import { ButtonLink } from './components/link'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { Trans } from '@lingui/macro'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

export const SelectReport = () => (
  <CenterContent>
    <H1>
      <Trans>Report a cyber incident</Trans>
    </H1>
    <P mt={[4, null, 5]}>
      <Trans>
        Here is where you can report cyber incidents to the CCCS. Here is
        additional text to test how the text will look like when we eventually
        put a real greeting to the user here, but for now, this text does not
        serve much of a purpose.
      </Trans>
    </P>
    <ButtonLink to="/scam" mb={[3, null, 5]} style={{ marginRight: '20px' }}>
      Scam
    </ButtonLink>
    <ButtonLink to="/file" mb={[3, null, 5]}>
      Malicious Cyber Artifact
    </ButtonLink>
  </CenterContent>
)
