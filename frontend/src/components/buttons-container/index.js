/** @jsx jsx */
import { Container } from '../container'
import { css, jsx } from '@emotion/core'
import { Button } from '../button'
import { Trans } from '@lingui/macro'
import { Link, ButtonLink } from '../link'
import PropTypes from 'prop-types'

export const ButtonsContainer = ({
  submit = false,
  landing = false,
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
          {submit === true ? (
            <Trans>Submit report</Trans>
          ) : (
            <Trans>Continue</Trans>
          )}
        </Button>
      </Container>
    ) : (
      <div name="buttonlink-container">
        <ButtonLink color="black" mb={[3, null, 5]} to={route}>
          {landing === true ? (
            <Trans>Report Now</Trans>
          ) : (
            <Trans>Report another scam</Trans>
          )}
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

ButtonsContainer.propTypes = {
  buttonLink: PropTypes.bool.isRequired,
  cancel: PropTypes.bool.isRequired,
  buttonTitle: PropTypes.string,
  route: PropTypes.string,
  landing: PropTypes.bool,
  submit: PropTypes.bool,
}
