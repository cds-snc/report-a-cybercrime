/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import { locales, activate } from './i18n.config'
import { Box, PseudoBox, VisuallyHidden } from '@chakra-ui/core'
import { A } from './components/link'

const Toggler = props => {
  const { locale } = props
  return (
    <A
      as="button"
      key={locale}
      padding={0}
      onClick={() => activate(locale)}
      transition="0"
      _focus={{
        outline: `3px solid #ffbf47`,
      }}
    >
      {locales[locale]}
    </A>
  )
}

export function LocaleSwitcher() {
  const { i18n } = useLingui()
  return (
    <Box>
      {i18n.locale === 'en' && <Toggler locale="fr" />}
      {i18n.locale === 'fr' && <Toggler locale="en" />}
    </Box>
  )
}
