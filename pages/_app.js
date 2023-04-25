// import "../style.css";

import { GlobalStyle } from '../components/GlobalStyle'
import '../style.css'

export default function App({ Component, pageProps }) {
  return (
    <GlobalStyle>
      <Component {...pageProps} />
    </GlobalStyle>
  )
}
