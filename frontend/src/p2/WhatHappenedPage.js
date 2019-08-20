/** @jsx jsx */
import { jsx } from '@emotion/core'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { P } from '../components/paragraph'
import { Ul } from '../components/unordered-list'
import { Li } from '../components/list-item'
import { Container } from '../components/container'
import { Steps } from '../components/stepper'
import { TrackPageViews } from '../TrackPageViews'
import { WhatHappenedForm } from './forms/WhatHappenedForm'
import { Layout } from '../components/layout'
import { getDoneForms } from '../utils/queriesAndMutations'
import { ButtonLink } from '../components/link'
import { css } from '@emotion/core'

const submitAndNavigate = (client, data) => {
  client.writeData({ data: { whatHappened: JSON.stringify(data) } })
  navigate(getDoneForms(client) ? 'confirmation' : '/p2/scammerdetails')
}

export const WhatHappenedPage = () => (
  <Layout>
    <Container
      display="flex"
      width="90%"
      flexDirection="row"
      marginBottom="20px"
    >
      <Steps activeStep={1} steps={[{}, {}, {}, {}, {}, {}]} />
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
        to="/p2/timeframe"
        textAlign="left"
      >
        <Trans>&#8678;Back</Trans>
      </ButtonLink>
    </Container>
    <H1>
      <Trans>Describe what happened</Trans>
    </H1>
    <P>
      <Trans>
        We know this can be hard to talk about. What happened is not your fault.
        Scammers use a number of techniques to get what they want.
      </Trans>
    </P>
    <P>
      <Trans>Think about things such as:</Trans>
    </P>
    <Ul>
      <Li>
        <Trans>The device or website you were on when it happened</Trans>
      </Li>
      <Li>
        <Trans>What the scammer said or did that was misleading</Trans>
      </Li>
      <Li>
        <Trans>What was suspicious or malicious about the situation</Trans>
      </Li>
    </Ul>
    <TrackPageViews />
    <WhatHappenedForm onSubmit={submitAndNavigate} />
  </Layout>
)
