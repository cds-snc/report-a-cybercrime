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
