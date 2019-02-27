import PropTypes from 'prop-types'
/** @jsx jsx **/
import { jsx, css } from '@emotion/core'
import { Container } from '../container'
import WordMark from '../wordmark'
import { Li } from '../list-item'
import { Ul } from '../unordered-list'

export const Footer = props => {
  return (
    <Container
      bg="black"
      display="flex"
      flexDirection="row"
      width={1}
      height={[50, null, 60]}
      alignItems="center"
      data-testid="background-color"
    >
      <Container color="white" flex="1 1 auto">
        <Ul listStyleType="none" mb={0}>
          <Li ml={3} display={['block', null, 'inline-block']}>
            Privacy
          </Li>
          <Li ml={3} display={['block', null, 'inline-block']}>
            Terms and Conditions
          </Li>
        </Ul>
      </Container>
      <Container flex="1 1 auto" textAlign="right" mr={3}>
        <WordMark width="6em" flag="#fff" text="#fff" />
      </Container>
    </Container>
  )
}

Footer.propTypes = {}

Footer.defaultProps = {}
