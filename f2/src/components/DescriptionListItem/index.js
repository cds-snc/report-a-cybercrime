/** @jsx jsx **/
import { jsx } from '@emotion/core'
import { Flex } from '@chakra-ui/core'
import PropTypes from 'prop-types'
import { Text } from '../text'
import { Trans } from '@lingui/macro'

export const DescriptionListItem = ({ description, descriptionTitle }) => {
  if (typeof description === 'undefined')
    console.warn(
      `Warning! description undefined for descriptionTitle=${descriptionTitle}`,
    )

  if (typeof description === 'undefined' || description.length === 0) {
    return null
  }
  return (
    <Flex wrap="wrap">
      <Text
        as="dt"
        fontWeight="bold"
        w={{ base: '100%', md: '40%' }}
        pr={4}
        pb={2}
      >
        <Trans id={descriptionTitle} />
      </Text>
      <Text as="dd" w={{ base: '100%', md: '60%' }} pb={2}>
        {description}
      </Text>
    </Flex>
  )
}

DescriptionListItem.propTypes = {
  description: PropTypes.any.isRequired,
  descriptionTitle: PropTypes.string.isRequired,
}
