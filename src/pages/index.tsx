import Head from 'next/head';
import { Sidebar } from '@/components/Sidebar';
import { Editor } from '@/components/Editor';

export default function Home() {
  return (
    <>
      <Head>
        <title>Caprice</title>
      </Head>

      <main>
        <Sidebar>
          <Editor />
        </Sidebar>
      </main>
    </>
  );
}
