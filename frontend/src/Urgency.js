/**@jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1, H2 } from './components/header'
import { Container } from './components/container'
import emergency from './images/emergency.svg'
import nonemergency from './images/nonemergency.svg'
import { Link } from '@reach/router'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

const Card = styled('div')`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid grey;
  max-width: 300px;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`

export const Urgency = () => (
  <CenterContent>
    <H1 fontSize={[5, null, 6]} mb={5}>
      <Trans>How urgent is your situation?</Trans>
    </H1>
    <Container
      display="flex"
      flexDirection={['column', null, 'row']}
      width={1}
      alignItems="center"
      mb={6}
    >
      <Container
        flex="1 1 auto"
        css={css`
          text-align: center;
          float: left;
        `}
        mb={[4, null, 0]}
        mr={[0, null, 5]}
      >
        <Link to="/option1">
          <Card>
            <img
              src={emergency}
              alt="An illustration of a person looking worried. A phone and 9-1-1 in speech bubble hover above their head."
              css={css`
                width: 100%;
              `}
            />
            <H2
              fontSize={[3, null, 4]}
              css={css`
                text-decoration: underline;
              `}
            >
              <Trans>{"It's an emergency: I need help now because someone's life is in danger."}</Trans>
            </H2>
          </Card>
        </Link>
      </Container>
      <Container
        flex="1 1 auto"
        css={css`
          text-align: center;
          float: right;
        `}
      >
        <Link to="/amountofinfo">
          <Card
            css={css`
              float: right;
            `}
          >
            <img
              src={nonemergency}
              alt="It's not an emergency"
              css={css`
                width: 100%;
              `}
            />
            <H2
              fontSize={[3, null, 4]}
              css={css`
                text-decoration: underline;
              `}
            >
              <Trans>{"It's not an emergency"}</Trans>
            </H2>
          </Card>
        </Link>
      </Container>
    </Container>
  </CenterContent>
)
