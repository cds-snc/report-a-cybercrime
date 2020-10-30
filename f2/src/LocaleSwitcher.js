/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useEffect } from 'react'
import { useLingui } from '@lingui/react'
import { locales, activate } from './i18n.config'
import { Box } from '@chakra-ui/core'
import { A } from './components/link'

const Toggler = (props) => {
  const { locale } = props
  return (
    <A
      key={locale}
      padding={0}
      onClick={(e) => {
        e.preventDefault()
        activate(locale)
      }}
      href="#"
      tabindex="0"
    >
      {locales[locale]}
    </A>
  )
}

export function LocaleSwitcher() {
  const { i18n } = useLingui()

  useEffect(() => {
    const title = i18n.locale === 'fr' ? 'signaler une fraude' : 'Report a scam'

    document.title = title
    document.documentElement.setAttribute('lang', i18n.locale)
  })

  return (
    <Box>
      {i18n.locale === 'en' && <Toggler locale="fr" />}
      {i18n.locale === 'fr' && <Toggler locale="en" />}
    </Box>
  )
}
