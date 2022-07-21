import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Melhor e-commerce do Brasil!" />
        <title>SkyCommerce</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
