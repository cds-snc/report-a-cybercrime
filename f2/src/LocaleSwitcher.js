/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import { ButtonLink } from './components/button-link'
import { locales, activate } from './i18n.config'
import { Box, PseudoBox, VisuallyHidden } from '@chakra-ui/core'

const Toggler = props => {
  const { locale } = props
  return (
    <ButtonLink key={locale} onClick={() => activate(locale)}>
      <VisuallyHidden>{locales[locale]}</VisuallyHidden>
      <PseudoBox aria-hidden d={{ base: 'none', md: 'initial' }}>
        {locales[locale]}
      </PseudoBox>
      <PseudoBox
        aria-hidden
        d={{ base: 'flex', md: 'none' }}
        bg="gray.100"
        textTransform="uppercase"
        size={10}
        alignItems="center"
        justifyContent="center"
      >
        {locale}
      </PseudoBox>
    </ButtonLink>
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
