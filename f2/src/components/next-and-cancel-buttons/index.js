/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Button } from '../button'
import { Trans } from '@lingui/macro'
import { Link } from '../link'
import PropTypes from 'prop-types'
import { Flex } from '@chakra-ui/core'

export const NextAndCancelButtons = ({ cancelRoute = '/', ...props }) => (
  <Flex direction="row" align="center">
    <Button type="submit" rightIcon="chevron-right" variantColor="green">
      {props.children}
    </Button>
    <Box ml={4}>
      <Link type="button" color="black" to={cancelRoute} textAlign="center">
        <Trans id="button.cancelReport" />
      </Link>
    </Box>
  </Flex>
)

NextAndCancelButtons.propTypes = {
  children: PropTypes.any,
}
