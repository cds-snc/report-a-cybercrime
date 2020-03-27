/** @jsx jsx **/
import PropTypes from 'prop-types'
import { LocaleSwitcher } from '../../LocaleSwitcher'
import { jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import sigEn from '../../images/sig-blk-en.svg'
import sigFr from '../../images/sig-blk-fr.svg'
import { Flex, Box, Image } from '@chakra-ui/core'
import { Layout } from '../layout'

export const TopBanner = (props) => {
  const { i18n } = useLingui()

  return (
    <Layout {...props}>
      <Flex align="center" fontFamily="body">
        <Box py={4} mr="auto" flexBasis={{ base: 272, md: 360 }}>
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
        <Box py={4} pl={4} ml="auto">
          <LocaleSwitcher />
        </Box>
      </Flex>
    </Layout>
  )
}
