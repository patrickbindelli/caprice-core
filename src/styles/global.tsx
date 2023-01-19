import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body, 
  main {
    font-family: sans-serif;
    background-color: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  html,
  body,
  main,
  body > div:first-child,
  div#__next,
  div#__next > div {
    height: 100%;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    user-select: none;
    -webkit-user-drag: none;

    ::-webkit-scrollbar {
      width: 5px;
      height: 10px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
      margin: 10px 0px;
    }

    ::-webkit-scrollbar-thumb {
      background: #474c50;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`;

export default GlobalStyle;
