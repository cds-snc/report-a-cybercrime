/** @jsx jsx **/
import { Container } from '../container'
import { jsx, css } from '@emotion/core'
import { Link } from '../link'
import { Trans } from '@lingui/macro'
import PropTypes from 'prop-types'

export const BackButton = ({ route = '' }) => (
  <Container
    width="105px"
    marginTop={[1, null, 1]}
    css={css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
  >
    <Link type="button" to={route} textAlign="left">
      <Trans>&#9664; Back </Trans>
    </Link>
  </Container>
)

BackButton.propTypes = {
  route: PropTypes.string,
}
