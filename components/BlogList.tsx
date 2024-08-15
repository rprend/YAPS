import { PostType } from "../interfaces/post"

interface BlogListProps {
  posts: PostType[]
}

export default function BlogList(props: BlogListProps): JSX.Element {
  return (
    <div>
      {props.posts.map((post) => (
        <div key={post.slug} className="not-prose px-2 flex flex-row justify-between h-8">
          <p><a className="hover:underline" href={`/blog/${post.slug}`}>{post.title}</a></p>
          <p>{post.date}</p>
        </div>
      ))}
    </div>
  )
}