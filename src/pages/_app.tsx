import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - boilerplate</title>
        <link rel="" href="/img/icon-123" />
        <meta
          name="description"
          content="A simple project starter to work with Typescript, React, NextJs and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
