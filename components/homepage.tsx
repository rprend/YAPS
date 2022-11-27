import { Category } from "./category";
import classnames from 'classnames'
import Canvas from "./canvas";

export interface HomePageProps {
  showing: boolean
}

export function HomePage(props: HomePageProps): JSX.Element {
  return (
    <div className={classnames({hidden: !props.showing, "homepage": true})}>
      <h1>Ryan&apos;s homepage</h1>
      <Category name="code">
        <div>hjon hjon</div>
      </Category>
      <Category name="music">
        <div>music. a youtube embed pollutes my site with blocked ad requests so you&apos;ll just have to imagine my <a target="blank" href="https://www.youtube.com/watch?v=zDsDCRVVCYw&list=PL-evJxq7wCJPwhV7P91uooPOauMSX-UbE">music</a></div>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL-evJxq7wCJPwhV7P91uooPOauMSX-UbE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
      </Category>
      <Category name="comedy">
        <div>comedy. youtube embeds pollute my site with blocked ad requests so you&apos;ll just have to imagine my <a target="blank" href="https://www.youtube.com/watch?v=ePGkCFvNpM0&list=PL-evJxq7wCJOAf5ktBD1geon3yeXGfA_8">jokes</a></div>
      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL-evJxq7wCJOAf5ktBD1geon3yeXGfA_8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
      </Category>
    </div>
  )
}