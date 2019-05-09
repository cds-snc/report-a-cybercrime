/** @jsx jsx */
import { Link } from '@reach/router'
import { Trans } from '@lingui/macro'
import { H1, H2 } from './components/header'
import styled from '@emotion/styled'
import { Container } from './components/container'
import { jsx, css } from '@emotion/core'
import cafc from './images/cafc.svg'
import online from './images/online.svg'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

const Card = styled('div')`
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);

  transition: 0.3s;
  padding-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid grey;
  max-width: 300px;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`

export const HowToTellPolice = () => (
  <CenterContent>
    <H1 fontSize={[5, null, 6]} mb={5}>
      <Trans>{'How do you want to make your report?'}</Trans>
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
        <Link to="/option2">
          <Card>
            <img
              src={cafc}
              alt="I would like to talk to someone"
              css={css`
                width: 100%;
              `}
            />
            <H2
              fontSize={[3, null, 4]}
              css={css`
                text-decoration: underline;
                color: blue;
              `}
            >
              <Trans>{'I would like to talk to someone'}</Trans>
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
        <Link to="/identity">
          <Card
            css={css`
              float: right;
            `}
          >
            <img
              src={online}
              alt="I would like to report online on my own"
              css={css`
                width: 100%;
              `}
            />
            <H2
              fontSize={[3, null, 4]}
              css={css`
                text-decoration: underline;
                color: blue;
              `}
            >
              <Trans>{'I would like to report online on my own'}</Trans>
            </H2>
          </Card>
        </Link>
      </Container>
    </Container>
  </CenterContent>
)
