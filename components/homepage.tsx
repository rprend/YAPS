import { Category } from "./category";
import classnames from 'classnames'

export interface HomePageProps {
  showing: boolean
}

export function HomePage(props: HomePageProps): JSX.Element {
  return (
    <div className={classnames({hidden: !props.showing})}>
      <h1>Ryan&apos;s homepage</h1>
      <Category name="code"></Category>
      <Category name="music"></Category>
      <Category name="comedy"></Category>
    </div>
  )
}