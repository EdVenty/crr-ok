import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'hotpink',
  colorSecondary: 'white',
  colorSecondaryInactive: 'white',

  boxShadowPrimary: 'none',
  boxShadowSecondary: 'inset 0 0 0 1px gray',
  boxShadowSecondaryInactive: 'inset 0 0 0 1px gray',

  // Typography
  fontBase: '"Roboto", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInactiveColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: 'hotpink',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  borderRadius: '3px',

  deliveryFormElementMargin: '0 0 1em 0',

  buttonPaddingX: 1,
  buttonPaddingY: 0.7,
  inputPadding: '0.5em',
  deliveryFormPadding: '2em',

  brandTitle: 'My custom storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://place-hold.it/350x150',
});