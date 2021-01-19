import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import Main from 'views/Main';
import { theme } from 'theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyle';
import {apolloClient} from "../api/apolloClient";


function Root() {
  return (
    <div className="Root">
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Main />
        </ThemeProvider>
      </ApolloProvider>
    </div>
  );
}

export default Root;
