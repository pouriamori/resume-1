import '../styles/main.css'
import '../styles/add.css'
import '../assets/fonts/fonts.css'


import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      
      <Component {...pageProps} />
    </>
  )
}
