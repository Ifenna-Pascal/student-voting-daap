import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Mainlayout from '../layouts/mainlayout'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.min.css";
import { ContractProvider } from '../context/contract.context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
  <ToastContainer
    position="bottom-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />
  <ContractProvider>
  <Mainlayout><Component {...pageProps} /></Mainlayout>
  </ContractProvider>
    </>
  )
}
