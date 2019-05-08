/**@jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1, H2 } from './components/header'
import { Container } from './components/container'
import evidence from './images/evidence.svg'
import story from './images/story.svg'
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

export const AmountOfInfoPage = () => (
  <CenterContent>
    <H1 fontSize={[5, null, 6]} mb={5}>
      <Trans>What information do you have to report?</Trans>
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
        <Link to="/howtotell">
          <Card>
            <img
              src={evidence}
              alt="suspect information"
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
              <Trans>
                I have evidence that could help identify who is responsible
              </Trans>
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
        <Link to="/howtotell">
          <Card
            css={css`
              float: right;
            `}
          >
            <img
              src={story}
              alt="tell a story"
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
              <Trans>I have a story to tell about what happened</Trans>
            </H2>
          </Card>
        </Link>
      </Container>
    </Container>
  </CenterContent>
)
