import PropTypes from 'prop-types'
/** @jsx jsx **/
import { jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import wmms from '../../images/wmms-blk.svg'
import { Box, Flex, List, Image } from '@chakra-ui/core'
import { Layout } from '../layout'

export const Footer = props => {
  const { i18n } = useLingui()

  return (
    <Flex as="footer" {...props} py={4} fontFamily="body">
      <Layout>
        <Flex align="center" direction="row">
          <List px={0}>{props.children}</List>
          <Box py={4} width={{ base: 147.2 }} ml="auto">
            <Image
              src={wmms}
              width="100%"
              alt={
                i18n.locale === 'en'
                  ? 'Symbol of the Government of Canada'
                  : 'Symbole du gouvernement du Canada'
              }
            />
          </Box>
        </Flex>
      </Layout>
    </Flex>
  )
}

Footer.propTypes = {
  children: PropTypes.any,
  bg: PropTypes.string,
}

Footer.defaultProps = { bg: 'gray.200' }
