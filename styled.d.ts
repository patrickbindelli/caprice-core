import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends CommonTheme {
    colors: {
      commom: {
        black: string;
        white: string;
      };
      grey: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        A100: string;
        A200: string;
        A400: string;
        A700: string;
      };
      background: {
        primary: string;
        secondary: string;
      };
      text: {
        primary: string;
        disabled: string;
      };
      primary: {
        main: string;
        contrastText: string;
      };
      secondary: {
        main: string;
        contrastText: string;
      };
    };
    lexical: {
      text: {
        colors: {
          paragraph: string;
          h1: string;
          h2: string;
          h3: string;
          h4: string;
          h5: string;
          h6: string;
        };
        normal?: string;
        bold?: string;
        code?: string;
        italic?: string;
        strikethrough?: string;
        subscript?: string;
        superscript?: string;
        underline?: string;
        underlineStrikethrough?: string;
      };
      codeBlock: {
        main: string;
        contrastText: string;
        selection: {
          main: string;
          contrastText?: string;
        };
      };
      quote: {
        border: string;
        text: string;
        background?: string;
      };
    };
  }
}
