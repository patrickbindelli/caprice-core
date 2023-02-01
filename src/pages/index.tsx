import { Document } from '@/components/Document';
import { Sidebar } from '@/components/Sidebar';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { Session, User, useSupabaseClient } from '@supabase/auth-helpers-react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface Props {
  initialSession: Session;
  user: User;
}
export default function Home({ initialSession, user }: Props) {
  const [mobileWidth, setMobileWidth] = useState(0);
  const [open, setOpen] = useState(false);

  const supabase = useSupabaseClient();

  const router = useRouter();

  const signOut = async () => {
    router.push('/logout');
  };

  const handleMobileClick = () => {
    setMobileWidth(window.innerWidth * 0.9);
    setOpen(true);
  };

  return (
    <>
      <Head>
        <title>Caprice</title>
        <meta
          name="description"
          content="Caprice Editor is a open-source markdown editor powered with Lexical."
        />
      </Head>

      <main>
        <button onClick={signOut}>SignOut</button>
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const supabase = createServerSupabaseClient(ctx);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: {
      initialSession: session,
      user: session.user,
    },
  };
};
