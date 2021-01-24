import { createGlobalStyle } from 'styled-components';
import { GlobalResetStyle } from 'shared/styles/reset';
import { FontsStyle } from 'shared/styles/fonts';

export const GlobalStyle = createGlobalStyle`
  ${ GlobalResetStyle }
  ${ FontsStyle }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    width: 100%;
    font-family: Value;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
  }
`;

