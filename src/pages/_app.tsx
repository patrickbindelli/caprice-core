import GlobalStyle from '@/styles/global';
import type { AppProps } from 'next/app';

import { CustomThemeProvider } from '@/hooks/useTheme';
import { LexicalThemeWrapper } from '@/styles/Themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <LexicalThemeWrapper>
        <Component {...pageProps} />
      </LexicalThemeWrapper>
    </CustomThemeProvider>
  );
}
