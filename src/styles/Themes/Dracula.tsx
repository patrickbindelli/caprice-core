import { DefaultTheme } from 'styled-components';
import CommonTheme from './CommonTheme';

const Dracula: DefaultTheme = {
  colors: {
    ...CommonTheme,
    background: {
      primary: '#1d1e26',
      secondary: '#15171b',
    },
    text: {
      primary: '#F8F8F2',
      disabled: '#8A8F98',
    },
    primary: {
      main: '#9580ff',
      contrastText: '#000',
    },
    secondary: {
      main: '#222232',
      contrastText: '#9580ff',
    },
  },
  lexical: {
    text: {
      colors: {
        paragraph: '#F8F8F2',
        h1: '#F8F8F2',
        h2: '#F8F8F2',
        h3: '#F8F8F2',
        h4: '#F8F8F2',
        h5: '#F8F8F2',
        h6: '#F8F8F2',
      },
    },
    codeBlock: {
      main: '#282A36',
      contrastText: '#F8F8F2',
      selection: {
        main: '#6273a4a0',
      },
    },
    quote: {
      border: '#9580ff',
      text: '#8A8F98',
    },
  },
};

export default Dracula;
