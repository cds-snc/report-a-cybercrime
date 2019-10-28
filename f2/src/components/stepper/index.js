/**@jsx jsx */
import { css, jsx } from '@emotion/core'
import { Container } from '../container'
import PropTypes from 'prop-types'
import { Text } from '../text'
import { Trans } from '@lingui/macro'

export const Steps = ({ activeStep, totalSteps }) => (
  <Container
    css={css`
      span {
        font-weight: 500;
        font-size: 24px;
        color: #6f777b;
      }
    `}
    display="flex"
    flexDirection="row"
    marginBottom="10px"
  >
    {' '}
    <Text>
      <Trans>
        Step {activeStep} of {totalSteps}
      </Trans>
    </Text>
  </Container>
)

Steps.propTypes = {
  totalSteps: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired,
}
