/** @jsx jsx **/
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { Trans } from '@lingui/macro'
import { Container } from '../container'
import { Text } from '../text'

export const WarningBanner = props => {
  const { bg } = props

  return (
    <header>
      <Container bg={bg} height={[50, null, 60]}>
        <Text
          paddingLeft="10px"
          paddingRight="10px"
          paddingTop={[1, null, 17]}
          textAlign="center"
        >
          <Trans>
            Warning! This is a prototype. No information you enter will be
            investigated by the police
          </Trans>
        </Text>
      </Container>
    </header>
  )
}

WarningBanner.propTypes = {
  bg: PropTypes.string,
}

WarningBanner.defaultProps = {
  bg: 'yellow',
}
