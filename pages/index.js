import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router'
import { LoginContext } from '../contexts';
import { LoadingScreen } from 'components';

const IndexPage = () => {
  const { loginStatus } = useContext(LoginContext);
  const router = useRouter();
  useEffect(() => {
    if (loginStatus === true) {
      router.replace('/home');
    }
    else router.replace('/login');
  }, [router, loginStatus])
  return <LoadingScreen />
}

export default IndexPage;
