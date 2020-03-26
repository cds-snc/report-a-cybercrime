/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link as ReactRouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Button } from '../button'
import { Link as ChakraLink } from '@chakra-ui/core'

//A link using react-router-dom. Useful for internal links. Takes a "to" attribute
export const Link = props => (
  <ChakraLink
    as={ReactRouterLink}
    color="blue.700"
    textDecoration="underline"
    fontSize={['md', null, 'lg', null]}
    _hover={{
      color: 'blue.hover',
    }}
    {...props}
  >
    {props.children}
  </ChakraLink>
)

Link.propTypes = {
  children: PropTypes.any,
  to: PropTypes.any.isRequired,
}

// Looks like a button, acts as a link
export const ButtonLink = props => (
  <Button {...props} as={ReactRouterLink} role="button">
    {props.children}
  </Button>
)

ButtonLink.propTypes = {
  children: PropTypes.any,
  to: PropTypes.any.isRequired,
}

// Looks like a link, acts as a button
export const LinkButton = props => (
  <ChakraLink
    color="blue.700"
    textDecoration="underline"
    fontSize={['md', null, 'lg', null]}
    _hover={{
      color: 'blue.hover',
    }}
    {...props}
    tabIndex="0"
    _active={{
      boxShadow: 'outline',
    }}
  >
    {props.children}
  </ChakraLink>
)

LinkButton.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func.isRequired,
}

// An anchor link. needs to contain an HREF. Useful for links outside the app
export const A = props => (
  <ChakraLink
    color="blue.700"
    textDecoration="underline"
    _hover={{
      color: 'blue.hover',
    }}
    {...props}
  >
    {props.children}
  </ChakraLink>
)

A.propTypes = {
  children: PropTypes.any,
  href: PropTypes.any.isRequired,
}
