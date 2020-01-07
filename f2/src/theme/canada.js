import { theme as chakraTheme } from '@chakra-ui/core'

const shadows = {
  outline: '0 0 0 3px #ffbf47',
  outlineHover: '0 0 0 4px #CBD5E0',
  outlineLeft: '-2px 0 0 0 #CBD5E0, 2px 0 0 0 inset #CBD5E0',
}

/*
const radius = 1
const radii = {
  none: '0',
  sm: `${radius * 0.125}rem`,
  md: `${radius * 0.25} rem`,
  lg: `${radius * 0.5} rem`,
  full: '9999px',
}
/**/

const colors = {
  green: {
    50: '#F2FFF0',
    100: '#C3EEBF',
    200: '#92D68F',
    300: '#5CB95B',
    400: '#3C9D3F',
    500: '#2D8133',
    600: '#24672B',
    700: '#1F5126',
    800: '#183C1F',
    900: '#102715',
  },
  yellow: {
    50: '#FFFDF0',
    100: '#FEF1BF',
    200: '#FADE89',
    300: '#F6C95E',
    400: '#ECB64B',
    500: '#D6962E',
    600: '#B7761F',
    700: '#975A16',
    800: '#744210',
    900: '#5F370E',
  },
}

const fonts = {
  heading: '"Noto Sans", sans-serif',
  body: '"Noto Sans", sans-serif',
  mono:
    'Noto Mono,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
}

const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '4rem',
}

const borders = {
  '3px': '3px solid',
}

const borderWidths = {
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
}

const space = {
  '7': '1.75rem',
}

const variants = {
  forms: {
    input: {
      autoComplete: 'off',
      rounded: 'none',
      borderWidth: '2px',
      borderColor: 'black',
      transition: '0',
      _hover: {
        boxShadow: 'outlineHover',
        borderColor: 'black',
      },
      _focus: {
        outline: 'none',
        bg: 'white',
        boxShadow: 'outline',
        borderColor: 'black',
        border: '3px',
      },
    },
  },
}

const canada = {
  ...chakraTheme,
  shadows: {
    ...chakraTheme.shadows,
    ...shadows,
  },
  fontSizes,
  fonts: {
    ...chakraTheme.fonts,
    ...fonts,
  },
  colors: {
    ...chakraTheme.colors,
    ...colors,
  },
  borders: {
    ...chakraTheme.borders,
    ...borders,
  },
  borderWidths: {
    ...chakraTheme.borderWidths,
    ...borderWidths,
  },
  space: {
    ...chakraTheme.space,
    ...space,
  },
  variants,
}

export default canada
