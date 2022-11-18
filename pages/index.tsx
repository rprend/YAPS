import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Blog } from '../components/blog'
import { Category } from '../components/category'
import { HomePage } from '../components/homepage'
import { PageType } from '../components/pages'
import Sidebar from '../components/sidebar'


export default function Home(): JSX.Element {
  const [Page, setPage] = useState<PageType>('home')

  function setCurrentPage(page: PageType) {
    setPage(page)
  }

  return (
    <>
      <Head>
        <title>Ponde.me</title>
        <meta name="description" content="making things work" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Sidebar
          setPage={setCurrentPage}
          page={Page}
        ></Sidebar>
        <div className="content">
          <HomePage showing={Page === 'home'}></HomePage>
          <Blog showing={Page === 'blog'}></Blog>
        </div>
      </main>


  </>
  )
}
