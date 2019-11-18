import { theme as chakraTheme } from '@chakra-ui/core'
import { mergeDeep } from 'apollo-utilities'

// Chakra theming
const radius = 0
const radii = {
  none: '0',
  sm: `${radius * 0.125}rem`,
  md: `${radius * 0.25}rem`,
  lg: `${radius * 0.5}rem`,
  full: '9999px',
}
const colors = {
  green: {
    50: '#0C1A06',
    100: '#0E2B04',
    200: '#104102',
    300: '#0C5301',
    400: '#0E6300',
    500: '#0E8000',
    600: '#189F07',
    700: '#36B924',
    800: '#65DC56',
    900: '#C0FFBB',
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
  fonts,
  radii,
  colors,
}

export default mergeDeep(chakraTheme, canada)

console.log(mergeDeep(chakraTheme, canada))
