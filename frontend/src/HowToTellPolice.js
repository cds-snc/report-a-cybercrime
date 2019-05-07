/** @jsx jsx */
import { Link } from '@reach/router'
import { Trans } from '@lingui/macro'
import { ButtonLink } from './components/link'
import { H1 } from './components/header'
import { Button } from './components/button'
import { TrackPageViews } from './TrackPageViews'
import { Container } from './components/container'
import { P } from './components/paragraph'
import { jsx, css } from '@emotion/core'
import cafc from './images/cafc.svg'
import online from './images/online.svg'

export const HowToTellPolice = () => (
  <Container width={['100%', null, '600px']} m="auto">
    <H1 fontSize={[5, null, 6]}>
      <Trans>How do you want to tell the police?</Trans>
    </H1>
    <Container alignItems="center" mb={3} mt={3}>
      <P fontSize={[3, null, 4]}>
        <Link to="/tbd">
          <Trans>I want to talk to someone directly</Trans>
        </Link>
      </P>
      <img
        src={cafc}
        style={{ width: '250px', height: '250px' }}
        alt="Talk to somebody"
      />
    </Container>
    <Container alignItems="center" mb={3} mt={3}>
      <P fontSize={[3, null, 4]}>
        <Link to="/tbd">
          <Trans>I want to report on my own</Trans>
        </Link>
      </P>
      <img
        src={online}
        alt="Report on my own"
        style={{ width: '250px', height: '250px' }}
      />
    </Container>
    <TrackPageViews />
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
  </Container>
)
