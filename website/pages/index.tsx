import * as React from 'react';
import Head from 'next/head';
import { ApiCaller } from '../components/ApiCaller';

export default function Home() {
  return (
    <>
      <Head>
        <title>Open Skynet</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="grid h-screen place-items-center">
          <ApiCaller />
        </div>
      </main>
    </>
  )
}
