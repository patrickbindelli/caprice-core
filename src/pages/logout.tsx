import { useSupabaseClient } from '@supabase/auth-helpers-react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { Logout } from '@/components/Logout';

export default function LogoutPage() {
  const [mobileWidth, setMobileWidth] = useState(0);
  const [open, setOpen] = useState(false);

  const supabase = useSupabaseClient();
  const router = useRouter();

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    router.push('/auth');
  }, [router, supabase]);

  useEffect(() => {
    signOut();
  }, [signOut]);

  return (
    <>
      <Head>
        <title>Logout</title>
      </Head>

      <main>
        <Logout />
      </main>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const supabase = createServerSupabaseClient(ctx);

//   const {
//     data: { session },
//   } = await supabase.auth.getSession();

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/auth',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       initialSession: session,
//       user: session.user,
//     },
//   };
// };
