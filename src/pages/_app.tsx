import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Mainlayout from '../layouts/mainlayout'

export default function App({ Component, pageProps }: AppProps) {
  return <Mainlayout><Component {...pageProps} /></Mainlayout>
}
