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
    color="blue.800"
    textDecoration="underline"
    _hover={{
      color: 'blue.500',
    }}
    fontSize={['md', null, 'lg', null]}
    {...props}
  >
    {props.children}
  </ChakraLink>
)

Link.propTypes = {
  children: PropTypes.any,
}

// Looks like a button, acts as a link
export const ButtonLink = props => (
  <Button {...props} as={ReactRouterLink} type="button">
    {props.children}
  </Button>
)

ButtonLink.propTypes = {
  children: PropTypes.any,
}

// Looks like a link, acts as a button
export const LinkButton = props => (
  <ChakraLink
    fontSize="lg"
    {...props}
    role="button"
    _active={{
      boxShadow: 'outline',
    }}
  >
    {props.children}
  </ChakraLink>
)

ButtonLink.propTypes = {
  children: PropTypes.any,
}

// An anchor link. needs to contain an HREF. Useful for links outside the app
export const A = props => (
  <ChakraLink
    color="blue.800"
    textDecoration="underline"
    _hover={{
      color: 'blue.500',
    }}
    {...props}
  >
    {props.children}
  </ChakraLink>
)

A.propTypes = {
  children: PropTypes.any,
}
