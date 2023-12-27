import Head from 'next/head'
import { HomePage } from '../components/homepage'
import Navbar from '../components/navbar'
import { getAllPosts } from '../lib/api'
import { PostType } from '../interfaces/post'

export interface HomeProps {
  allPosts: PostType[]
}

export default function Home(props: HomeProps): JSX.Element {
  return (
    <div className='container mx-auto max-w-2xl px-4 mt-6'>
      <Head>
        <title>prendergast.dev</title>
        <meta name="description" content="my personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HomePage
        posts={props.allPosts}
      />
    </div>
  )

}

// Static generation
export const getStaticProps = async () => {
  const allPosts = getAllPosts()

  return {
    props: { allPosts },
  }
}