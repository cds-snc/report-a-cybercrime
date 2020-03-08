import { create } from '@storybook/theming/create'

export default create({
  base: 'light',

  colorPrimary: 'white',
  colorSecondary: '#2C5282',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#D5D5D5',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Noto Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'black',
  barSelectedColor: '#2C5282',
  barBg: '#F2F2F2',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Canada',
  brandUrl: '/',
})
