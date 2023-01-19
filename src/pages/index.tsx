import { Sidebar } from '@/components/Sidebar';
import Head from 'next/head';
import { Document } from '@/components/Document';
export default function Home() {
  return (
    <>
      <Head>
        <title>Caprice</title>
      </Head>

      <main>
        <Sidebar>
          <Document />
        </Sidebar>
      </main>
    </>
  );
}
