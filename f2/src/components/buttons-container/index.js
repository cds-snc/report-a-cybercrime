/** @jsx jsx */
import { Container } from '../container'
import { css, jsx } from '@emotion/core'
import { Button, Box } from '@chakra-ui/core'
import { Trans } from '@lingui/macro'
import { Link, Link as ButtonLink, Flex } from '@chakra-ui/core'
import PropTypes from 'prop-types'
import { Link as Routed } from 'react-router-dom'

export const ButtonsContainer = ({
  submit = false,
  landing = false,
  cancel = true,
  buttonLink = true,
  route = '',
  cancelRoute = '/',
  nextPage = '',
}) => (
  <Flex direction="row" align="center">
    {buttonLink === false ? (
      <Button
        type="submit"
        rightIcon="chevron-right"
        variantColor="green"
        to={route}
      >
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
    ) : (
      <Box name="buttonlink-container">
        {landing === true ? (
          <Button
            as={Routed}
            rightIcon="chevron-right"
            variantColor="green"
            to={route}
          >
            <Trans>Report now</Trans>
          </Button>
        ) : (
          <Button
            as={Routed}
            leftIcon="chevron-left"
            variantColor="green"
            to={route}
          >
            <Trans>Report another scam</Trans>
          </Button>
        )}
      </Box>
    )}

    {cancel === true ? (
      <Box ml={4}>
        <Link type="button" color="black" to={cancelRoute} textAlign="center">
          <Trans>Cancel report</Trans>
        </Link>
      </Box>
    ) : null}
  </Flex>
)

export const ButtonsContainerLanding = () => (
  <Container>
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
  <Container>
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
