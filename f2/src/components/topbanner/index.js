/** @jsx jsx **/
import PropTypes from 'prop-types'
import { LocaleSwitcher } from '../../LocaleSwitcher'
import { jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import rcmpbrandingeng from '../../images/rcmpbrandingeng.svg'
import rcmpbrandingfre from '../../images/rcmpbrandingfre.svg'
import { Flex, Box, Image } from '@chakra-ui/core'

export const TopBanner = props => {
  const { i18n } = useLingui()

  return (
    <Flex align="center" {...props}>
      <Box p={4} width={[250, null, 300]}>
        <Image
          src={i18n.locale === 'en' ? rcmpbrandingeng : rcmpbrandingfre}
          width="100%"
          alt={
            i18n.locale === 'en'
              ? 'Royal Canadian Mounted Police'
              : 'Gendarmerie royale du Canada'
          }
        />
      </Box>
      <Box p={4} ml="auto">
        <LocaleSwitcher color="white" />
      </Box>
    </Flex>
  )
}

TopBanner.propTypes = {
  lang: PropTypes.string.isRequired,
  bg: PropTypes.string,
}

TopBanner.defaultProps = {
  bg: 'black',
}
