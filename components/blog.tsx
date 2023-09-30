import classnames from "classnames"

export interface BlogProps {
  showing: boolean
}

export function Blog(props: BlogProps): JSX.Element {
  return (
    <div className={classnames({hidden: !props.showing, 'blog': true})}>
      <h1>Blog</h1>
      <p>Writing i think worth sharing</p>
    </div>
  )
}