/** @jsx jsx */
import { Container } from '../container'
import { css, jsx } from '@emotion/core'
import { BREAKPOINTS } from '../../theme'
import { Button } from '../button'
import { Trans } from '@lingui/macro'
import { Link } from '../link'
import PropTypes from 'prop-types'
import { ButtonLink } from '../link'

const mq = BREAKPOINTS.map(bp => `@media (min-width: ${bp})`)

export const ButtonsContainer = ({
  buttonTitle = 'Continue',
  buttonLinkTitle = 'Report Now',
  cancel = true,
  buttonLink = true,
  route = '/p2/timeframe',
}) => (
  <Container
    mt="1rem"
    mb="4rem"
    display={['flex', 'block', 'flex']}
    alignItems="center"
    css={css`
      button,
      div[name='buttonlink-container'] a {
        padding: 0.7rem 1.5rem;
      }
    `}
  >
    {buttonLink === false ? (
      <Container mt="1rem">
        <Button type="submit">
          <Trans>{buttonTitle}</Trans>
        </Button>
      </Container>
    ) : (
      <div name="buttonlink-container">
        <ButtonLink color="black" mb={[3, null, 5]} to={route}>
          <Trans>{buttonLinkTitle}</Trans>
        </ButtonLink>
      </div>
    )}

    {cancel === true ? (
      <Container mt="1.9rem" ml={['3rem', '0', '3rem']}>
        <Link type="button" color="black" to="/p2/" textAlign="center">
          <Trans>Cancel report</Trans>
        </Link>
      </Container>
    ) : null}
  </Container>
)

export const ButtonContainerCancel = props => (
  <Container
    mt="1rem"
    mb="4rem"
    display={['flex', 'block', 'flex']}
    alignItems="center"
    css={css`
      button {
        padding: 0.45rem 1.5rem;
      }
    `}
  >
    {props.children}
  </Container>
)

ButtonsContainer.propTypes = {
  buttonLink: PropTypes.bool.isRequired,
  cancel: PropTypes.bool.isRequired,
}
