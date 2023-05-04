// import "../style.css";

import Head from 'next/head'
import { GlobalStyle } from '../components/GlobalStyle'
import '../style.css'

export default function App({ Component, pageProps }) {
  return (
    <GlobalStyle>
      <Head>
        <title>Starbucks</title>
      </Head>
      <Component {...pageProps} />
    </GlobalStyle>
  )
}
