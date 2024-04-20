import Head from "next/head";
import Navbar from "../components/navbar";

export default function Contact(): JSX.Element {
  return (
    <div className='container mx-auto max-w-2xl px-4 mt-6'>
    <Head>
      <title>prendergast.dev</title>
      <meta name="description" content="my personal site" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar showBackButton={true} />
    <article className="prose">
      <h1>Contact</h1>
      <p>Ryan Prendergast</p>
      <p>Contact me at rprendergast1121 at gmail</p>
    </article>
  </div>
  )
}