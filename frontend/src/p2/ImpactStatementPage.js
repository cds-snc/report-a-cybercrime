/* eslint-disable react/no-unescaped-entities */

import { navigate } from '@reach/router'
import React from 'react'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { P } from '../components/paragraph'
import { Layout } from '../components/layout'
import { Container } from '../components/container'
import { Steps } from '../components/stepper'
import { ImpactStatementInfoForm } from './forms/ImpactStatementInfoForm'
import { TrackPageViews } from '../TrackPageViews'
import { getDoneForms } from '../utils/queriesAndMutations'
import { ButtonLink } from '../components/link'
import { css } from '@emotion/core'

const submitAndNavigate = (client, data) => {
  console.log(data)

  client.writeData({ data: { impact: JSON.stringify(data) } })
  navigate(getDoneForms(client) ? 'confirmation' : 'contactinfo')
}

export const ImpactStatementPage = () => (
  <Layout>
    <Container
      display="flex"
      width="90%"
      flexDirection="row"
      marginBottom="20px"
    >
      <Steps activeStep={3} steps={[{}, {}, {}, {}, {}, {}]} />
    </Container>

    <Container
      width="105px"
      marginTop={[1, null, 1]}
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}
    >
      <ButtonLink
        type="button"
        color="black"
        to="/p2/scammerdetails"
        textAlign="left"
      >
        <Trans>&#8678; Back </Trans>
      </ButtonLink>
    </Container>

    <H1>
      <Trans>Impact caused by the scam</Trans>
    </H1>
    <P>
      <Trans>
        What happened is not okay. You are doing the right thing by reporting.
        You are helping others not have to go through the same thing in the
        future.
      </Trans>
    </P>

    <TrackPageViews />
    <ImpactStatementInfoForm onSubmit={submitAndNavigate} />
  </Layout>
)
