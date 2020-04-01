import { theme as chakraTheme } from '@chakra-ui/core'
import { generateAlphaColors } from '@chakra-ui/core/dist/theme/colors-utils'

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
  gray: {
    50: '#FAFAFA',
    100: '#F2F2F2',
    200: '#E8E8E8',
    300: '#D5D5D5',
    400: '#AEAEAE',
    500: '#808080',
    600: '#555555',
    700: '#373737',
    800: '#202020',
    900: '#191919',
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
  blue: {
    ...chakraTheme.colors.blue,
    hover: '#00F',
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

const outlineColor = {
  focus: generateAlphaColors(chakraTheme.colors.blue[300])[700],
  invalid: generateAlphaColors(chakraTheme.colors.red[300])[700],
}
const shadows = {
  outline: `0 0 0 4px ${outlineColor.focus}`,
  outlineInput: `0 0 4px 1px ${outlineColor.focus}`,
  //outline: 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6)',
  outlineHover: `0 0 0 2px ${colors.gray[300]}`,
  outlineLeft: `-2px 0 0 0 ${colors.gray[300]}, 2px 0 0 0 inset ${colors.gray[300]}`,
}

const inputDefaults = {
  borderWidth: '1px',
  borderColor: 'gray.400',
  bg: 'white',
  _hover: {
    boxShadow: 'outlineHover',
    borderColor: 'gray.700',
  },
  _focus: {
    outline: 'none',
    bg: 'white',
    boxShadow: 'outlineInput',
    borderColor: 'blue.600',
  },
  _invalid: {
    borderColor: 'red.700',
    boxShadow: `0 0 4px 1px ${outlineColor.invalid}`,
    '&:focus': {
      borderColor: 'blue.600',
      boxShadow: `0 0 4px 1px ${outlineColor.focus}`,
    },
  },
}
const variants = {
  inputs: {
    checkboxes: {
      ...inputDefaults,
      size: 10,
      _checked: {
        border: '3px',
        borderColor: 'black',
      },
      _checkedAndHover: {
        boxShadow: 'outlineHover',
      },
    },
    radios: {
      ...inputDefaults,
      rounded: 'full',
      size: 10,
      _checked: {
        border: '3px',
        borderColor: 'black',
      },
      _checkedAndHover: {
        boxShadow: 'outlineHover',
      },
    },
    inputs: {
      ...inputDefaults,
      rounded: '4px',
      p: 2,
      maxW: '300px',
      transition: '0',
    },
  },
  buttons: {
    default: {
      fontSize: { base: 'lg', md: 'xl' },
      fontWeight: 'normal',
      size: 'lg',
      rounded: '4px',
      bg: 'gray.200',
      border: '1px',
      borderStyle: 'outset',
      borderColor: 'gray.300',
      _hover: {
        boxShadow: 'outlineHover',
      },
      _active: {
        bg: 'gray.300',
      },
    },
    solid: {
      border: '1px',
      borderStyle: 'outset',
      borderColor: 'blue.500',
      _active: {
        bg: 'blue.800',
      },
    },
  },
}

// Final Theme output
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
