import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'PT Sans', sans-serif;
  }

  body.fontLoaded {
    font-family: 'PT Sans', sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'PT Sans', sans-serif;
    line-height: 1.5em;
  }
`;
