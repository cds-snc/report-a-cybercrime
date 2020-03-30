import React from 'react'
import { ThemeProvider, CSSReset, Box } from '@chakra-ui/core'
import theme from '../src/theme/canada'
import { Global, css } from '@emotion/core'
import { MemoryRouter } from 'react-router-dom'
import { I18nProvider } from '@lingui/react'
import { i18n } from '@lingui/core'
import { activate } from '../src/i18n.config'

const ThemeDecorator = (storyFn) => {
  activate('en')

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
          {storyFn()}
        </ThemeProvider>
      </I18nProvider>
    </MemoryRouter>
  )
}

export default ThemeDecorator
