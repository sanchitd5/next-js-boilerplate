import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router'
import { LoginContext, ContextManager } from '../contexts';
import { LoadingScreen } from '../components';

const InternalComponent = () => {
  const { loginStatus } = useContext(LoginContext);
  const router = useRouter();
  useEffect(() => {
    if (loginStatus) {
      router.replace('/home');
    }
    else router.replace('/login');
  }, [router, loginStatus])
  return <LoadingScreen />
}

export default function Home() {
  return <ContextManager>
    <InternalComponent />
  </ContextManager>;
}
