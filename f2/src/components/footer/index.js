import PropTypes from 'prop-types'
/** @jsx jsx **/
import { jsx, css } from '@emotion/core'
import { Container } from '../container'
import WordMark from '../wordmark'
import { Ul } from '../unordered-list'

export const Footer = props => {
  const { bg } = props

  return (
    <footer>
      <Container
        bg={bg}
        display="flex"
        flexDirection="row"
        width={1}
        height={55}
        alignItems="center"
        data-testid="background-color"
        m="auto auto 0 auto"
        css={css`
          flex-shrink: 0;
        `}
      >
        <Container flex="1 1 auto">
          <Ul listStyleType="none" mb={0}>
            {props.children}
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
    </footer>
  )
}

Footer.propTypes = {
  children: PropTypes.any,
  bg: PropTypes.string,
}

Footer.defaultProps = { bg: 'black' }
