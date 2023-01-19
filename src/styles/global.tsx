import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body, 
  main {
    font-family: sans-serif;
    background-color: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.text.primary};
    height: 100%;
  }
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    user-select: none;
    -webkit-user-drag: none;

    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    ::-webkit-scrollbar-track {
      background: #272727;
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
