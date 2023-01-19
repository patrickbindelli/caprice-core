import { DefaultTheme } from 'styled-components';
import CommonTheme from './CommonTheme';

const BACKGROUND = '#282A36';
const FOREGROUND = '#F8F8F2';
const SELECTION = '#44475A';
const COMMENT = '#6272A4';
const RED = '#FF5555';
const ORANGE = '#FFB86C';
const YELLOW = '#F1FA8C';
const GREEN = '#50FA7B';
const PURPLE = '#BD93F9';
const CYAN = '#8BE9FD';
const PINK = '#FF79C6';

const Dracula: DefaultTheme = {
  colors: {
    ...CommonTheme,
    background: {
      primary: '#1d1e26',
      secondary: '#15171b',
    },
    text: {
      primary: FOREGROUND,
      disabled: COMMENT,
    },
    primary: {
      main: '#9580ff',
      contrastText: '#222232',
    },
    secondary: {
      main: '#222232',
      contrastText: '#9580ff',
    },
  },
  lexical: {
    text: {
      colors: {
        paragraph: FOREGROUND,
        h1: FOREGROUND,
        h2: FOREGROUND,
        h3: FOREGROUND,
        h4: FOREGROUND,
        h5: FOREGROUND,
        h6: FOREGROUND,
      },
    },
    codeBlock: {
      main: BACKGROUND,
      contrastText: FOREGROUND,
      selection: {
        main: SELECTION,
      },
    },
    quote: {
      border: '#9580ff',
      text: COMMENT,
    },
    codeHighlight: {
      comment: COMMENT,
      ponctuation: PINK,
      property: PURPLE,
      selector: CYAN,
      operator: PINK,
      attr: PINK,
      variable: CYAN,
      function: CYAN,
    },
  },
};
export default Dracula;
