/**@jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1, H2 } from './components/header'
import { P } from './components/paragraph'
import { Container } from './components/container'
import emergency from './images/emergency.svg'
import nonemergency from './images/nonemergency.svg'
import { ButtonLink } from './components/link'
import { Button } from './components/button'
import { Link } from '@reach/router'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

const Card = styled('div')`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 300px;
  padding-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid grey;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`

export const Urgency = () => (
  <CenterContent>
    <H1 fontSize={[5, null, 6]} mb={5}>
      <Trans>How urgent is it?</Trans>
    </H1>
    <Container
      display="flex"
      flexDirection="row"
      width={1}
      alignItems="center"
      mb={5}
    >
      <Container
        flex="1 1 auto"
        mr={3}
        css={css`
          text-align: center;
        `}
      >
        <Link to="/">
          <Card>
            <img
              src={emergency}
              alt="It's an emergency"
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
              It's an emergency
            </H2>
          </Card>
        </Link>
      </Container>
      <Container
        flex="1 1 auto"
        mr={3}
        css={css`
          text-align: center;
        `}
      >
        <Link to="/">
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
              It's not an emergency
            </H2>
          </Card>
        </Link>
      </Container>
    </Container>
    <Container display="flex" flexDirection="row">
      <Container width={1 / 2}>
        <ButtonLink to="/">
          &lt; <Trans>Back</Trans>
        </ButtonLink>
      </Container>
      <Container width={'400px'}>
        <Button
          type="Submit"
          css={css`
            float: right;
          `}
        >
          <Trans>Cancel</Trans>
        </Button>
      </Container>
    </Container>
  </CenterContent>
)
