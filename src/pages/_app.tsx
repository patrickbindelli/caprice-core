import GlobalStyle from '@/styles/global';
import type { AppProps } from 'next/app';
import { CustomThemeProvider } from '@/hooks/useTheme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </CustomThemeProvider>
  );
}
