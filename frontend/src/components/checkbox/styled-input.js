import styled from '@emotion/styled'
import theme from '../../theme'

export const StyledInput = styled('input')(
  {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '24px',
    height: '24px',
    zIndex: 1,
    margin: 0,
    zoom: 1,
    opacity: 0,
    ':checked + span:after': {
      opacity: 1,
    },
    ':focus + span:before': {
      boxShadow: `0 0 0 3px ${theme.colors.yellow}`,
    },
  },
  ({ disabled }) => ({
    cursor: disabled ? 'auto' : 'pointer',
    ' + span': {
      pointerEvents: disabled ? 'none' : 'auto',
    },
  }),
)
