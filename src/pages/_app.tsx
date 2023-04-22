import React from 'react'
import Head from 'next/head'
import '@/styles/globals.css'
import '@/styles/sb-admin-2.css'
import '@/styles/dataTables.bootstrap4.min.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>Auction - Dashboard</title>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  )
}
