/** @jsx jsx **/
import PropTypes from 'prop-types'
import { LocaleSwitcher } from '../../LocaleSwitcher'
import { jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import sigEn from '../../images/sig-blk-en.svg'
import sigFr from '../../images/sig-blk-fr.svg'
import { Flex, Box, Image } from '@chakra-ui/core'

export const TopBanner = props => {
  const { i18n } = useLingui()

  return (
    <Flex align="center" {...props} fontFamily="body" bg="white">
      <Box p={4} height={[25, null, 32]}>
        <Image
          src={i18n.locale === 'en' ? sigEn : sigFr}
          width="100%"
          alt={
            i18n.locale === 'en'
              ? 'Symbol of the Government of Canada - Symbole du Gouvernement du Canada'
              : 'Symbole du Gouvernement du Canada - Symbol of the Government of Canada'
          }
        />
      </Box>
      <Box p={4} ml="auto">
        <LocaleSwitcher />
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
