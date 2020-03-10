import React from 'react'
import PropTypes from 'prop-types'
import canada from '../../theme/canada'
import { Container } from '../container'
import { statuses, Alert as ChakraAlert, AlertIcon } from '@chakra-ui/core'

export const Well = ({ variantColor, ...props }) => (
  <Container
    rounded="4px"
    boxShadow="innerShadow"
    p={4}
    border="1px"
    {...(variantColor && {
      borderColor: canada.colors[variantColor][400],
      bg: canada.colors[variantColor][200],
      boxShadow: `inset 0 1px 1px ${canada.colors[variantColor][300]}`,
    })}
    {...props}
  />
)

Well.defaultProps = {
  variantColor: 'gray',
}

Well.propTypes = {
  variantColor: PropTypes.string,
}

export const Alert = ({ status, withIcon, ...props }) => {
  //canada.colors[statuses[status].color][700]
  //This gets the color of status defined by chakra-ui :
  //    statuses[status].color = statuses[info].color = blue
  //Then we use it to get a color shade in the theme file:
  //    canada.colors[blue][800]

  return (
    <ChakraAlert
      status={status}
      borderLeft="3px"
      borderColor={canada.colors[statuses[status].color][800]}
      {...props}
    >
      {withIcon && (
        <AlertIcon
          name={`${statuses[status].icon}`}
          color={canada.colors[statuses[status].color][800]}
        />
      )}

      {props.children}
    </ChakraAlert>
  )
}

Alert.defaultProps = {}

Alert.propTypes = {
  status: PropTypes.oneOf(['success', 'info', 'warning', 'error']).isRequired,
  withIcon: PropTypes.bool,
}
