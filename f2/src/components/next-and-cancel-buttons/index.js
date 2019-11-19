/** @jsx jsx */
import { Container } from '../container'
import { css, jsx } from '@emotion/core'
import { Button } from '../button'
import { Trans } from '@lingui/macro'
import { Link } from '../link'
import PropTypes from 'prop-types'

export const NextAndCancelButtons = ({ cancelRoute = '/', ...props }) => (
  <Container
    mt="1rem"
    mb="4rem"
    display={['flex', 'block', 'flex']}
    alignItems="center"
    css={css`
      button,
      div[name='buttonlink-container'] a {
        padding: 0.7rem 1.5rem;
        width: 100%;
        text-align: center;
      }

      @media (max-width: 640px) {
        div[name='buttonlink-container'] a {
          padding: 0.7rem 0;
        }
      }
    `}
  >
    <Container mt="1rem">
      <Button type="submit">{props.children}</Button>
    </Container>

    <Container mt="1.9rem" ml={['3rem', '0', '3rem']}>
      <Link type="button" color="black" to={cancelRoute} textAlign="center">
        <Trans id="button.cancelReport" />
      </Link>
    </Container>
  </Container>
)

NextAndCancelButtons.propTypes = {
  cancelRoute: PropTypes.string,
  children: PropTypes.any,
}
