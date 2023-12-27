interface BlogPostContent {
  content: string
}

export default function BlogPost(props: BlogPostContent): JSX.Element {
  return (
    <article className="prose">
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </article>
  )
}