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
          <Li ml={3} display="inline-block" fontSize={[1, null, 2]}>
            Privacy
          </Li>
          <Li ml={3} display="inline-block" fontSize={[1, null, 2]}>
            Terms and Conditions
          </Li>
        </Ul>
      </Container>
      <Container mr={3} width={['4em', null, '6em']}>
        <WordMark
          width="100%"
          flag="#fff"
          text="#fff"
          css={css`
            display: block;
          `}
        />
      </Container>
    </Container>
  )
}

Footer.propTypes = {}

Footer.defaultProps = {}
