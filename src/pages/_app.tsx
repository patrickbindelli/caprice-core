import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/global';

import { Dracula, LexicalThemeWrapper } from '@/styles/Themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Dracula}>
      <GlobalStyle />
      <LexicalThemeWrapper>
        <Component {...pageProps} />
      </LexicalThemeWrapper>
    </ThemeProvider>
  );
}
