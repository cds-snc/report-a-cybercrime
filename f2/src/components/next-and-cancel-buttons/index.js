/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Button } from '../button'
import { Trans } from '@lingui/macro'
import PropTypes from 'prop-types'
import { Flex, Icon } from '@chakra-ui/core'
import { P } from '../paragraph'
import { Route } from 'react-router-dom'

export const NextAndCancelButtons = ({
  cancelRoute = '/confirmCancel',
  ...props
}) => (
  <Flex direction="row" align="center" wrap="wrap" mb={10} mt={10}>
    <P w="100%">{props.next}</P>
    <Button type="submit" w={{ base: '100%', md: 'auto' }}>
      {props.button}
      <Icon focusable="false" ml={2} mr={-2} name="chevron-right" size="28px" />
    </Button>
    <Route
      render={({ history }) => (
        <Button
          onClick={() => history.push(cancelRoute)}
          fontSize={{ base: 'lg', md: 'xl' }}
          color="black"
          variantColor="gray"
          to={cancelRoute}
          textAlign="center"
          w={{ base: '100%', md: 'auto' }}
          ml={{ base: 0, md: 4 }}
          mt={{ base: 4, md: 0 }}
        >
          <Trans id="button.cancelReport" />
        </Button>
      )}
    />
  </Flex>
)

NextAndCancelButtons.propTypes = {
  children: PropTypes.any,
}
