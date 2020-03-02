import React from 'react'
import { ThemeProvider, CSSReset, Box } from '@chakra-ui/core'
import theme from '../src/theme/canada'
import { Global, css } from '@emotion/core'

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i&display=swap');
      `}
    />
    <Box m={6}>{storyFn()}</Box>
  </ThemeProvider>
)

export default ThemeDecorator
