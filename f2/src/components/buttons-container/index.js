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
  route = '',
  cancelRoute = '/',
  nextPage = '',
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
        width: 100%;
        text-align: center;
      }

      @media (max-width: 640px) {
        div[name='buttonlink-container'] a {
          padding: 0.7rem 0;
        }
      }
    `}
  >
    {buttonLink === false ? (
      <Container mt="1rem">
        <Button type="submit">
          {submit === true ? (
            <Trans>Submit report &nbsp; ❯</Trans>
          ) : (
            <Trans>Next</Trans>
          )}

          {nextPage === 'Scammer details' ? (
            <Trans>: Clues about the suspect</Trans>
          ) : nextPage === 'Money lost' ? (
            <Trans>: Money lost</Trans>
          ) : nextPage === 'Impact of scam' ? (
            <Trans>: Impact of the scam</Trans>
          ) : nextPage === 'What happened' ? (
            <Trans>: What happened</Trans>
          ) : nextPage === 'Supporting files' ? (
            <Trans>: Add files</Trans>
          ) : nextPage === 'Contact info' ? (
            <Trans>: Contact information</Trans>
          ) : nextPage === 'Confirm information' ? (
            <Trans>: Review report</Trans>
          ) : null}
        </Button>
      </Container>
    ) : (
      <Container name="buttonlink-container">
        {landing === true ? (
          <ButtonLink color="black" mb={[3, null, 5]} to={route}>
            <Trans>Report now ❯</Trans>
          </ButtonLink>
        ) : (
          <ButtonLink color="black" mb={[3, null, 5]} to={route}>
            <Trans> ❮ &nbsp; Report another scam</Trans>
          </ButtonLink>
        )}
      </Container>
    )}

    {cancel === true ? (
      <Container mt="1.9rem" ml={['3rem', '0', '3rem']}>
        <Link type="button" color="black" to={cancelRoute} textAlign="center">
          <Trans>Cancel report</Trans>
        </Link>
      </Container>
    ) : null}
  </Container>
)

export const ButtonsContainerLanding = () => (
  <Container
    mt="1rem"
    mb="4rem"
    display={['flex', 'block', 'flex']}
    justifyContent="space-between"
    alignItems="center"
    css={css`
      button,
      div[name='buttonlink-container'] a {
        padding: 0.7rem 1.5rem;
        text-align: center;
      }

      @media (max-width: 640px) {
        div[name='buttonlink-container'] a {
          padding: 0.7rem 0;
          width: 100%;
        }
      }
    `}
  >
    <Container name="buttonlink-container">
      <ButtonLink textAlign="center" to="/p1">
        <Trans>Prototype 1</Trans>
      </ButtonLink>
    </Container>
    <Container name="buttonlink-container">
      <ButtonLink textAlign="center" to="/p2">
        <Trans>Prototype 2</Trans>
      </ButtonLink>
    </Container>
  </Container>
)

export const ButtonsContainerYesNo = ({
  yesRoute = '',
  noRoute = '',
  marginB = '10em',
}) => (
  <Container
    mt="1rem"
    mb="4rem"
    display={['flex', 'block', 'flex']}
    alignItems="center"
    css={css`
      button,
      div[name='buttonlink-container'] a {
        padding: 0.7rem 2.5rem;
        text-align: center;
      }

      div[name='buttonlink-container'] a:first-of-type {
        margin-right: 1rem;
      }

      @media (max-width: 640px) {
        div[name='buttonlink-container'] a {
          padding: 0.7rem 0;
          width: 100%;
        }
      }

      margin-bottom: ${marginB};
    `}
  >
    <Container name="buttonlink-container">
      <ButtonLink textAlign="center" to={yesRoute}>
        <Trans>Yes</Trans>
      </ButtonLink>
    </Container>
    <Container name="buttonlink-container">
      <ButtonLink textAlign="center" to={noRoute}>
        <Trans>No</Trans>
      </ButtonLink>
    </Container>
  </Container>
)

ButtonsContainer.propTypes = {
  buttonLink: PropTypes.bool.isRequired,
  cancel: PropTypes.bool.isRequired,
  cancelRoute: PropTypes.string,
  buttonTitle: PropTypes.string,
  route: PropTypes.string,
  landing: PropTypes.bool,
  submit: PropTypes.bool,
  nextPage: PropTypes.string,
}

ButtonsContainerYesNo.propTypes = {
  yesRoute: PropTypes.string.isRequired,
  noRoute: PropTypes.string.isRequired,
  marginB: PropTypes.string,
}
