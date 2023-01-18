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
          <button
            style={{
              background: 'rgb(44, 44, 44)',
              color: 'white',
              border: 'none',
              outline: '0',
              height: '30px',
            }}
            onClick={() => {
              setFullscreen((e) => !e);
            }}
          >
            {fullscreeen ? 'Desativar Fullscreen' : 'Ativar Fullscreen'}
          </button>
          <Editor width={900} fullscreen={fullscreeen} />
        </Sidebar>
      </main>
    </>
  );
}
