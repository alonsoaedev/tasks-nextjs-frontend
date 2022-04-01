import '../styles/globals.css';
import Layout from '../components/layout/Layout';

import 'bootswatch/dist/litera/bootstrap.min.css'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
      import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
