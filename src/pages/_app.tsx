import { CustomThemeProvider } from '@/hooks/useTheme';
import GlobalStyle from '@/styles/global';
import type { AppProps } from 'next/app';

import { Session, SessionContextProvider } from '@supabase/auth-helpers-react';
import { useState } from 'react';

import { Database } from '@/types/supabase';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabaseClient] = useState(createBrowserSupabaseClient<Database>());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <CustomThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </CustomThemeProvider>
    </SessionContextProvider>
  );
}

export default MyApp;
