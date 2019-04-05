import React from 'react'
import { Trans } from '@lingui/macro'
import PropTypes from 'prop-types'
import { Container } from './components/container'
import { css } from '@emotion/core'
import { Text } from './components/text'

const Counter = props => (
  <React.Fragment>
    <Text textAlign="center" fontSize={[5, null, 6]}>
      {' '}
      {props.number}{' '}
    </Text>
    <Text textAlign="center" fontSize={[2, null, 2]}>
      {' '}
      {props.text}
    </Text>
  </React.Fragment>
)

Counter.propTypes = {
  number: PropTypes.number,
  text: PropTypes.object,
}

export const Counters = ({
  websites,
  phoneNumbers,
  emailAddresses,
  ...rest
}) => (
  <Container
    display="flex"
    flexDirection="row"
    width={1}
    alignItems="top"
    m="auto auto 0 auto"
    css={css`
      flex-shrink: 0;
    `}
    {...rest}
  >
    <Container data-testid="phoneNumbers" flex="0.5 0.5 auto">
      <Counter number={phoneNumbers} text={<Trans>Phone numbers</Trans>} />
    </Container>

    <Container data-testid="websites" flex="0.5 0.5 auto">
      <Counter number={websites} text={<Trans>Website links</Trans>} />
    </Container>

    <Container data-testid="emailAddresses" flex="0.5 0.5 auto">
      <Counter number={emailAddresses} text={<Trans>Email addresses</Trans>} />
    </Container>
  </Container>
)

Counters.propTypes = {
  websites: PropTypes.number,
  phoneNumbers: PropTypes.number,
  emailAddresses: PropTypes.number,
}
