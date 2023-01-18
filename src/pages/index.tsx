import Head from 'next/head';
import { Sidebar } from '@/components/Sidebar';
import { Editor } from '@/components/Editor';
import { useState } from 'react';

export default function Home() {
  const [fullscreeen, setFullscreen] = useState(false);
  return (
    <>
      <Head>
        <title>Caprice</title>
      </Head>

      <main>
        <Sidebar>
          <Editor width={900} fullscreen={fullscreeen} />
        </Sidebar>
      </main>
    </>
  );
}
