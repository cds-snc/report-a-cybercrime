/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Button } from '../button'
import { Trans } from '@lingui/macro'
import PropTypes from 'prop-types'
import { Flex, Box, Icon } from '@chakra-ui/core'
import { P } from '../paragraph'
import { Link as ReactRouterLink } from 'react-router-dom'

export const NextAndCancelButtons = ({ cancelRoute = '/', ...props }) => (
  <Flex direction="row" align="center" wrap="wrap" mb={4} mt={10}>
    <P w="100%">{props.next}</P>
    <Button type="submit">
      {props.button}
      <Icon focusable="false" ml={2} mr={-2} name="chevron-right" size="28px" />
    </Button>
    <Box ml={4}>
      <Button
        as={ReactRouterLink}
        fontSize={{ base: 'lg', md: 'xl' }}
        color="black"
        variant="link"
        variantColor="gray"
        to={cancelRoute}
        textAlign="center"
      >
        <Trans id="button.cancelReport" />
      </Button>
    </Box>
  </Flex>
)

NextAndCancelButtons.propTypes = {
  children: PropTypes.any,
}
