import React, { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import Head from 'next/head';
import { Document } from '@/components/Document';
export default function Home() {
  const [mobileWidth, setMobileWidth] = useState(0);
  const [open, setOpen] = useState(false);

  const handleMobileClick = () => {
    setMobileWidth(window.innerWidth * 0.9);
    setOpen(true);
  };

  return (
    <>
      <Head>
        <title>Caprice</title>
      </Head>

      <main>
        <Sidebar
          mobileWidth={mobileWidth}
          mobileOpen={open}
          setMobileOpen={setOpen}
        >
          <Document mobileClick={handleMobileClick} />
        </Sidebar>
      </main>
    </>
  );
}
