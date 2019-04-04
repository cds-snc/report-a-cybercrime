import React from 'react'
import { Trans } from '@lingui/macro'
import PropTypes from 'prop-types'
import { Container } from './components/container'
import { css } from '@emotion/core'
import { Text } from './components/text'

const Counter = props => (
  <React.Fragment>
    <Text textAlign="center" fontSize={[4, null, 6]}>
      {' '}
      {props.number}{' '}
    </Text>
    <Text textAlign="center"> {props.text}</Text>
  </React.Fragment>
)

Counter.propTypes = {
  number: PropTypes.number,
  text: PropTypes.object,
}

export const Counters = props => (
  <Container
    display="flex"
    flexDirection="row"
    width={1}
    height={55}
    alignItems="top"
    m="auto auto 0 auto"
    css={css`
      flex-shrink: 0;
    `}
    {...props}
  >
    <Container flex="0.5 0.5 auto">
      <Counter number={111} text={<Trans>numbers</Trans>} />
    </Container>

    <Container flex="0.5 0.5 auto">
      <Counter number={222} text={<Trans>URLs</Trans>} />
    </Container>

    <Container flex="0.5 0.5 auto">
      <Counter number={333} text={<Trans>addresses</Trans>} />
    </Container>
  </Container>
)
