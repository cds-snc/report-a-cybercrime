/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { asAnchor } from '../../utils/asAnchor'
import { Link as ReactRouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Li } from '../list-item'
import { Button } from '../button'
import { Link as ChakraLink } from '@chakra-ui/core'

const BaseAnchor = asAnchor('a')

export const Link = props => (
  <ChakraLink
    as={ReactRouterLink}
    color="blue.600"
    fontSize={['md', null, 'lg', null]}
    {...props}
  >
    {props.children}
  </ChakraLink>
)

Link.propTypes = {
  children: PropTypes.any,
}

export const ButtonLink = props => (
  <Button {...props} as={ReactRouterLink} type="button">
    {props.children}
  </Button>
)

ButtonLink.propTypes = {
  children: PropTypes.any,
}

export const ButtonAnchor = props => (
  <BaseAnchor
    fontSize={[2, null, 3]}
    fontWeight="normal"
    lineHeight={[2, null, 3]}
    colors="button"
    mt={[2, null, 3]}
    py={1}
    px={[2, null, 3]}
    {...props}
    css={css`
      text-decoration: none;
    `}
    display="inline-block"
  >
    {props.children}
  </BaseAnchor>
)

ButtonAnchor.propTypes = {
  children: PropTypes.any,
}

export const A = props => (
  <ChakraLink color="blue.600" {...props}>
    {props.children}
  </ChakraLink>
)

A.propTypes = {
  children: PropTypes.any,
}

export const FooterLink = props => (
  <Li ml={3} mb={0} display="inline-block">
    <BaseAnchor
      fontSize={[1, null, 2]}
      lineHeight={[1, null, 2]}
      colors="footerLink"
      {...props}
    >
      {props.children}
    </BaseAnchor>
  </Li>
)

FooterLink.propTypes = {
  children: PropTypes.any,
}
