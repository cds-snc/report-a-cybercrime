import { i18n } from '@lingui/core'

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

// this was causing an infinite loop
let params = new URL(document.location).searchParams
let lang = params.get('lang')
console.log(lang)
if (lang === 'fr') {
  activate('fr')
} else if (lang === 'en') {
  activate('en')
} else if (window.location.hostname.indexOf('signalez') > -1) {
  activate('fr')
} else if (window.location.hostname.indexOf('report') > -1) {
  activate('en')
} else {
  activate('en')
}
