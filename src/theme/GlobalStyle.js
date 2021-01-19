import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before , *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5% // makes 1rem ===  16px (HAPPY REMS)
    }

    body {
        margin: 0;
        padding: 0;
        font-size: 1.6rem; //leaves default size 16px;
        font-family: 'Barlow', sans-serif;
    }
`;

export default GlobalStyle;