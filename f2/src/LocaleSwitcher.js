/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import { ButtonLink } from './components/button-link'
import { locales, activate } from './i18n.config'

// TODO: fix this up.
export function LocaleSwitcher() {
  const { i18n } = useLingui()
  return (
    <section
      css={css`
        align-content: right;
        display: block-inline;
      `}
    >
      {i18n.locale === 'en' && (
        <ButtonLink key={'en'} onClick={() => activate('fr')}>
          {locales['fr']}
        </ButtonLink>
      )}
      {i18n.locale === 'fr' && (
        <ButtonLink key={'en'} onClick={() => activate('en')}>
          {locales['en']}
        </ButtonLink>
      )}
    </section>
  )
}
