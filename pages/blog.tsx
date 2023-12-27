import Head from "next/head";
import Navbar from "../components/navbar";
import BlogList from "../components/BlogList";
import { getAllPosts } from "../lib/api";
import { PostType } from "../interfaces/post";

interface BlogProps {
  allPosts: PostType[]
}

export default function Blog(props: BlogProps): JSX.Element {
  return (
    <div className='container mx-auto max-w-2xl px-4 mt-6'>
      <Head>
        <title>prendergast.dev</title>
        <meta name="description" content="my personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar showBackButton={true} />
      <article className="prose">
        <BlogList posts={props.allPosts} />
      </article>
    </div>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts()

  return {
    props: { allPosts },
  }
}