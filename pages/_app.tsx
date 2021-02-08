import Layout from '../compo/Layout';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps /*, AppContext */ } from 'next/app'

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
