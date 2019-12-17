import React from 'react'
import { useLingui } from '@lingui/react'
import { Home } from './Home'
import { Trans } from '@lingui/macro'
import { TopBanner } from './components/topbanner'
import { PhaseBanner } from './components/phase-banner'
import { WarningBanner } from './components/warning-banner'
import { Footer } from './components/footer'
import { ThemeProvider, Flex, Link, CSSReset } from '@chakra-ui/core'
import canada from './theme/canada'
import { SkipLink } from './components/skip-link'
import { StateProvider } from './utils/state'

const App = () => {
  const { i18n } = useLingui()
  const initialState = {
    doneForms: false,
    formData: {},
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'saveFormData':
        return {
          ...state,
          formData: {
            ...state.formData,
            ...action.data,
          },
        }
      case 'deleteFormData':
        return {
          ...state,
          formData: {},
        }
      case 'saveDoneForms':
        return {
          ...state,
          doneForms: action.data,
        }
      default:
        return state
    }
  }
  return (
    <ThemeProvider theme={canada}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <CSSReset />
        <Flex direction="column" minHeight="100vh">
          <header>
            <SkipLink invisible href="#main">
              <Trans id="SkipLink.text" />
            </SkipLink>
            <WarningBanner>
              <Trans id="banner.warning" />
            </WarningBanner>
            <PhaseBanner phase={<Trans id="banner.phase" />}>
              <Trans id="banner.phaseText" />
            </PhaseBanner>
            <TopBanner lang={i18n.locale} bg="black" />
          </header>

          <Flex id="main" justify="center" fontFamily="body" flex={1}>
            <Home />
          </Flex>

          <Footer height="1000px" bg="black">
            <Link
              color="white"
              href={
                i18n.locale === 'en'
                  ? 'https://digital.canada.ca/legal/privacy/'
                  : 'https://numerique.canada.ca/transparence/confidentialite/'
              }
            >
              <Trans id="banner.footerPrivacy" />
            </Link>
            <Link
              color="white"
              ml={4}
              href={
                i18n.locale === 'en'
                  ? 'https://digital.canada.ca/legal/terms/'
                  : 'https://numerique.canada.ca/transparence/avis/'
              }
            >
              <Trans id="banner.footerTermsAndConditions" />
            </Link>
          </Footer>
        </Flex>
      </StateProvider>
    </ThemeProvider>
  )
}

export default App
