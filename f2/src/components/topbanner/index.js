/** @jsx jsx **/
import PropTypes from 'prop-types'
import { LocaleSwitcher } from '../../LocaleSwitcher'
import { jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import sigEn from '../../images/sig-blk-en.svg'
import sigFr from '../../images/sig-blk-fr.svg'
import { Flex, Box, Image } from '@chakra-ui/core'
import { Layout } from '../layout'

export const TopBanner = props => {
  const { i18n } = useLingui()

  return (
    <Layout {...props}>
      <Flex
        align="center"
        direction={{ base: 'column', md: 'row-reverse' }}
        fontFamily="body"
      >
        <Box py={{ base: 2, md: 4 }} pl={4} ml="auto">
          <LocaleSwitcher />
        </Box>
        <Box
          py={{ base: 2, md: 4 }}
          mr="auto"
          flexBasis={{ base: 'auto', md: 360 }}
        >
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
      </Flex>
    </Layout>
  )
}

TopBanner.propTypes = {
  lang: PropTypes.string.isRequired,
  bg: PropTypes.string,
}

TopBanner.defaultProps = {
  bg: 'gray.50',
}
