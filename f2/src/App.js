import React from 'react'
import { useLingui } from '@lingui/react'
import { Global, css } from '@emotion/core'
//import { ThemeProvider } from 'emotion-theming'
//import theme from './theme'
import { Home } from './Home'
import { Trans } from '@lingui/macro'
import { TopBanner } from './components/topbanner'
import { PhaseBanner } from './components/phase-banner'
import { WarningBanner } from './components/warning-banner'
import { Footer } from './components/footer'
import { Content } from './components/container'
import {
  ThemeProvider as ChakraThemeProvider,
  Flex,
  Link,
  CSSReset,
} from '@chakra-ui/core'
import canada from './theme/canada'

console.log(canada)

const App = () => {
  const { i18n } = useLingui()
  return (
    <main>
      <ChakraThemeProvider theme={canada}>
        <CSSReset />
        <header>
          <WarningBanner />
          <PhaseBanner phase={<Trans>ALPHA</Trans>} phaseColor="purple">
            <Trans>This site will change as we test ideas.</Trans>
          </PhaseBanner>
          <TopBanner lang={i18n.locale} bg="black" />
        </header>

        <Flex>
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
            <Trans>Privacy</Trans>
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
            <Trans>Terms and Conditions</Trans>
          </Link>
        </Footer>
      </ChakraThemeProvider>
    </main>
  )
}

export default App
