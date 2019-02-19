import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { Container, Box } from '../container'
import GoCSignature from '../gocsig'
import { LanguageSwitcher } from '../../LanguageSwitcher'

export const TopBanner = props => {
  const { lang, bg } = props

  return (
    <Container
      bg={bg}
      display="flex"
      flexDirection="row"
      width={1}
      height={[50, null, 60]}
      alignItems="center"
    >
      <Box ml={3} width={[250, null, 300]}>
        <GoCSignature
          width="100%"
          lang={lang}
          flag="#fff"
          text="#fff"
          css={css`
            display: block;
          `}
        />
      </Box>
      <Box
        flex="1 1 auto"
        mr={3}
        css={css`
          text-align: right;
        `}
      >
        <LanguageSwitcher />
      </Box>
    </Container>
  )
}

TopBanner.propTypes = {
  lang: PropTypes.string,
  bg: PropTypes.string,
}
