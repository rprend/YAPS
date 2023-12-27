import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import { getAllPosts, getPostBySlug } from "../../lib/api"
import markdownToHtml from "../../lib/markdownToHtml"
import { PostType } from "../../interfaces/post"
import Navbar from "../../components/navbar"
import Head from "next/head"
import BlogPost from "../../components/BlogPost"

interface PostProps {
  post: PostType
}

export default function Post(props: PostProps) {
  return (
    <div className='container mx-auto max-w-2xl px-4 mt-6'>
      <Head>
        <title>prendergast.dev</title>
        <meta name="description" content="my personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <BlogPost content={props.post.content} />
    </div>
  )
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug)
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}