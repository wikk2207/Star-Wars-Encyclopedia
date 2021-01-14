import GlobalStyle from '../src/theme/GlobalStyle';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/mainTheme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [(Story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Story/>
  </ThemeProvider>
)
];