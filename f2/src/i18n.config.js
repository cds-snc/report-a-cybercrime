import { i18n } from '@lingui/core'
import { getUserLocale } from 'get-user-locale'

export const locales = {
  en: 'English',
  fr: 'Français',
}

export async function activate(locale) {
  let catalog

  try {
    catalog = await import(
      /* webpackChunkName: "i18n-[index]" */ `@lingui/loader!./locales/${locale}.json`
    )
  } catch (e) {
    // this fails only during tests due to webpack errors.
  }

  i18n.load(locale, catalog)
  i18n.activate(locale)
}

let params = new URL(document.location).searchParams
let lang = params.get('lang')
let userLocale = getUserLocale()
if (lang === 'fr') {
  activate('fr')
} else if (lang === 'en') {
  activate('en')
} else if (window.location.hostname.indexOf('signalez') > -1) {
  activate('fr')
} else if (window.location.hostname.indexOf('report') > -1) {
  activate('en')
} else if (userLocale && ['en', 'fr'].includes(userLocale.substr(0, 2))) {
  activate(userLocale.substr(0, 2))
} else {
  activate('en')
}
