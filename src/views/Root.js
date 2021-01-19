import React from 'react';
import { ThemeProvider } from 'styled-components';
import Main from 'views/Main';
import { theme } from 'theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyle';

function Root() {
  return (
    <div className="Root">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default Root;
