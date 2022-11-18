import Head from 'next/head'
import Image from 'next/image'
import { Category } from '../components/category'
import Sidebar from '../components/sidebar'


export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Ponde.me</title>
        <meta name="description" content="making things work" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Sidebar></Sidebar>

        <div className="content">
          <h1>Ryan&apos;s homepage</h1>
          <p>Here&apos;s a bit about me,  </p>
          <Category
            name="code"
          ></Category>
          <Category
            name="music"
          ></Category>
          <Category
            name="comedy"
          ></Category>
        </div>
      </main>


  </>
  )
}
