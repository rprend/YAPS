import Head from "next/head";
import Navbar from "../components/navbar";

export default function Blog(): JSX.Element {
  return (
    <div className='container mx-auto max-w-5xl px-4 mt-6'>
      <Head>
        <title>prendergast.dev</title>
        <meta name="description" content="my personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="">
      </main>
    </div>
  )
}