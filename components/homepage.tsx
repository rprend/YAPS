import { Category } from "./category";
import classnames from 'classnames'

export interface HomePageProps {
  showing: boolean
}

export function HomePage(props: HomePageProps): JSX.Element {
  return (
    <div className={classnames({hidden: !props.showing})}>
      <h1>Ryan&apos;s homepage</h1>
      <Category name="code">
        <div></div>
      </Category>
      <Category name="music">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL-evJxq7wCJPwhV7P91uooPOauMSX-UbE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </Category>
      <Category name="comedy">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL-evJxq7wCJOAf5ktBD1geon3yeXGfA_8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </Category>
    </div>
  )
}