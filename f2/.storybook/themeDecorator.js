import React from 'react'
import { ThemeProvider, CSSReset, Box } from '@chakra-ui/core'
import theme from '../src/theme/canada'
import { Global, css } from '@emotion/core'
import { MemoryRouter } from 'react-router-dom'
import { I18nProvider, useLingui } from '@lingui/react'
import { i18n } from '@lingui/core'
import en from '../src/locales/en.json'

const ThemeDecorator = storyFn => {
  i18n.load('en', en)
  i18n.activate('en')
  return (
    <MemoryRouter>
      <I18nProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <CSSReset />
          <Global
            styles={css`
              @import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i&display=swap');
            `}
          />
          <Box m={6}>{storyFn()}</Box>
        </ThemeProvider>
      </I18nProvider>
    </MemoryRouter>
  )
}

export default ThemeDecorator
