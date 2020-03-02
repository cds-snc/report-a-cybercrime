/** @jsx jsx **/
import { jsx } from '@emotion/core'
import { Icon } from '@chakra-ui/core'
import { LinkButton } from '../link'
import PropTypes from 'prop-types'
import { Flex } from '@chakra-ui/core'

export const BackButton = ({ variant, variants, variantColor, ...props }) => (
  <LinkButton textAlign="left" d="flex" alignItems="center" {...props}>
    <Icon name="chevron-left" />
    <Flex align="center">{props.children}</Flex>
  </LinkButton>
)

BackButton.propTypes = {
  route: PropTypes.string,
  children: PropTypes.any,
}
