import { createGlobalStyle } from "styled-components";
import lineseed from './font/LINESeedKR-Rg.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
          font-family: 'lineseed';
          src: local('lineseed'), local('lineseed');
          font-style: normal;
          src: url(${lineseed}) format('truetype');
      }
      
  *, *::before, *::after {
    box-sizing: border-box;
    font-size: 20px;
  }

  body {
    font-family: lineseed;
    line-height: 1.5;
  }
`

export default GlobalStyle;