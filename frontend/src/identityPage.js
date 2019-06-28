/**@jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1, H2 } from './components/header'
import { Container } from './components/container'
import followup from './images/followup.svg'
import noFollowup from './images/nofollowup.svg'
import { Link } from '@reach/router'
import { Steps } from './components/stepper'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

const topBarContainer = css`
  display: flex;
  width: 90%;
  flex-direction: row;
  margin-bottom: 20px;
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

export const IdentityPage = () => (
  <CenterContent>
    <Container css={topBarContainer}>
      <Steps activeStep={4} />
    </Container>
    <H1 fontSize={[5, null, 6]} mb={5}>
      <Trans>
        Would you like to leave contact information for a potential follow-up?
      </Trans>
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
        <Link to="/option3">
          <Card>
            <img
              src={noFollowup}
              alt="No followup"
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
              <Trans>{'I don’t expect to receive a follow-up'}</Trans>
              <br />
              <br />
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
        <Link to="/option3">
          <Card
            css={css`
              float: right;
            `}
          >
            <img
              src={followup}
              alt="With followup"
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
              <Trans>
                {
                  'I would like to be contacted should my report warrant a follow-up'
                }
              </Trans>
            </H2>
          </Card>
        </Link>
      </Container>
    </Container>
  </CenterContent>
)
