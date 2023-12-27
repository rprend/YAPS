import { PostType } from "../interfaces/post"

interface BlogListProps {
  posts: PostType[]
}

export default function BlogList(props: BlogListProps): JSX.Element {
  return (
    <div>
      {props.posts.map((post) => (
        <div key={post.slug} className="flex flex-row justify-between">
          <p><a href={`/blog/${post.slug}`}>{post.title}</a></p>
          <p>{post.date}</p>
        </div>
      ))}
    </div>
  )
}