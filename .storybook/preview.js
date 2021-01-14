import GlobalStyle from '../src/theme/GlobalStyle';
import React from 'react';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [(Story) => (
  <div>
    <GlobalStyle />
    <Story/>
  </div>
)
];