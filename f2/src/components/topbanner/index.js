/** @jsx jsx **/
import PropTypes from 'prop-types'
import { LocaleSwitcher } from '../../LocaleSwitcher'
import { jsx, css } from '@emotion/core'
import { Container } from '../container'
import { useLingui } from '@lingui/react'
import rcmpbrandingeng from '../../images/rcmpbrandingeng.svg'
import rcmpbrandingfre from '../../images/rcmpbrandingfre.svg'

export const TopBanner = props => {
  const { bg } = props
  const { i18n } = useLingui()

  return (
    <Container
      bg={bg}
      display="flex"
      flexDirection="row"
      width={1}
      height={[60, null, 60]}
      alignItems="center"
      data-testid="background-color"
    >
      <Container ml={3} width={[250, null, 300]}>
        <img
          src={i18n.locale === 'en' ? rcmpbrandingeng : rcmpbrandingfre}
          width="300px"
          alt={
            i18n.locale === 'en'
              ? 'Royal Canadian Mounted Police'
              : 'Gendarmerie royale du Canada'
          }
        />
      </Container>
      <Container
        flex="1 1 auto"
        mr={3}
        css={css`
          text-align: right;
        `}
      >
        <LocaleSwitcher />
      </Container>
    </Container>
  )
}

TopBanner.propTypes = {
  lang: PropTypes.string.isRequired,
  bg: PropTypes.string,
}

TopBanner.defaultProps = {
  bg: 'black',
}
