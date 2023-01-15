import type { AppProps } from 'next/app';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from '@/styles/global';

const theme: DefaultTheme = {};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
