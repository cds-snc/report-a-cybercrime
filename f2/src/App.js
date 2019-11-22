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

const App = () => {
  const { i18n } = useLingui()
  return (
    <ThemeProvider theme={canada}>
      <CSSReset />
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

      <Flex id="main" justify="center" fontFamily="body">
        <Home />
      </Flex>

      <Footer bg="black">
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
    </ThemeProvider>
  )
}

export default App
