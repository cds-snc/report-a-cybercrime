import { theme as chakraTheme } from '@chakra-ui/core'
import { mergeDeep } from 'apollo-utilities'

const shadows = {
  outline: '0 0 0 3px #ffbf47',
  outlineHover: '0 0 0 2px #CBD5E0',
}

// Chakra theming
//const radius = 1
//const radii = {
//  none: '0',
//  sm: `${radius * 0.125}rem`,
//  md: `${radius * 0.25}rem`,
//  lg: `${radius * 0.5}rem`,
//  full: '9999px',
//}
const colors = {
  green: {
    50: '#F0FFF1',
    100: '#C6F6CA',
    200: '#9AE6A3',
    300: '#68D379',
    400: '#48BB5E',
    500: '#38A14F',
    600: '#2F8545',
    700: '#276739',
    800: '#225432',
    900: '#1C452A',
  },
}

const fonts = {
  heading: '"Helvetica", sans-serif',
  body: '"Helvetica", sans-serif',
  mono:
    'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
}

// Final Theme output
const canada = {
  shadows,
  //radii,
  fonts,
  colors,
}

export default mergeDeep(chakraTheme, canada)
