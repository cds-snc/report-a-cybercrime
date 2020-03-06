import React from 'react'
import { useLingui } from '@lingui/react'
import { Global, css } from '@emotion/core'
import { Home } from './Home'
import { Trans } from '@lingui/macro'
import { TopBanner } from './components/topbanner'
import { PhaseBanner } from './components/phase-banner'
import { WarningBanner } from './components/warning-banner'
import { Footer } from './components/footer'
import { ThemeProvider, Flex, Stack, CSSReset } from '@chakra-ui/core'
import canada from './theme/canada'
import { SkipLink } from './components/skip-link'
import { StateProvider, initialState, reducer } from './utils/state'
import { P } from './components/paragraph'
import { Layout } from './components/layout'
import { Li } from './components/list-item'
import { A } from './components/link'

const App = () => {
  const { i18n } = useLingui()

  return (
    <ThemeProvider theme={canada}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <CSSReset />
        <Global
          styles={css`
            @import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i&display=swap');
          `}
        />
        <Flex direction="column" minHeight="100vh" bg="gray.50">
          <header>
            <SkipLink invisible href="#main">
              <Trans id="SkipLink.text" />
            </SkipLink>
            {process.env.REACT_APP_DEV_ENVIRONMENT === 'yes' && (
              <WarningBanner>
                <Trans id="banner.warning" />
              </WarningBanner>
            )}
            <PhaseBanner phase={<Trans id="banner.phase" />}>
              <Trans id="banner.phaseText">
                <A
                  href={
                    i18n.locale === 'en'
                      ? 'http://www.antifraudcentre-centreantifraude.ca/report-signalez-eng.htm'
                      : 'http://www.antifraudcentre-centreantifraude.ca/report-signalez-fra.htm'
                  }
                  isExternal
                />
              </Trans>
            </PhaseBanner>
            <TopBanner lang={i18n.locale} />
          </header>

          <Stack
            as="main"
            id="main"
            fontFamily="body"
            flex="1 0 auto"
            mx="auto"
            pt={10}
            width="100%"
            bg="gray.50"
          >
            <Home />

            <Layout>
              <P fontSize="sm" my={3} aria-label="application version">
                {`Version: ${
                  process.env.REACT_APP_VERSION
                    ? process.env.REACT_APP_VERSION.slice(0, 7)
                    : '000000'
                }`}
              </P>
            </Layout>
          </Stack>
          <Footer>
            {/** The List component is in the Footer component */}
            <Li>
              <A href={'/privacystatement?lang=' + i18n.locale} isExternal>
                <Trans id="banner.footerPrivacy" />
              </A>
            </Li>
            <Li>
              <A
                ml={4}
                href={'/termsandconditions?lang=' + i18n.locale}
                isExternal
              >
                <Trans id="banner.footerTermsAndConditions" />
              </A>
            </Li>
          </Footer>
        </Flex>
      </StateProvider>
    </ThemeProvider>
  )
}

export default App
