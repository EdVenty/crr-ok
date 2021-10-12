// .storybook/preview.js

import { themes } from '@storybook/theming';
import { ThemeProvider } from 'styled-components';
import LightTheme from './LightTheme';

const controls = {
  'theme.color.primary': {
    type: 'color',
    label: 'Primary color'
  },
  'theme.color.secondary': {
    type: 'color',
    label: 'Secondary color'
  },
  'theme.color.defaultText': {
    type: 'color',
    label: 'Default text color'
  }
};

export const parameters = {
  // actions: { argTypesRegex: "^on[A-Z].*" },
  // controls: {
  //   matchers: {
  //     color: /(background|color)$/i,
  //     date: /Date$/,
  //   },
  // },
  themePlayground: {
    theme: LightTheme,
    // controls,
    provider: ThemeProvider
  }
}