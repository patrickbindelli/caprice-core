import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import { Container } from './Login.styles';
const Login = () => {
  const supabaseClient = useSupabaseClient();

  return (
    <Container>
      <Auth
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                inputText: 'white',
              },
            },
          },
        }}
        supabaseClient={supabaseClient}
        providers={['github']}
        socialLayout="horizontal"
      />
    </Container>
  );
};

export default Login;
