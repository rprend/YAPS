import { useState } from "react"
import classnames from "classnames"

export interface CategoryProps {
  name: string
}

export function Category(props: CategoryProps): JSX.Element {
  const [hidingDetails, setHidingDetails] = useState(true)

  function categoryClick() {
    setHidingDetails(!hidingDetails)
  }

  return (
    <div className={`category ${props.name}`}>
      <h2>{props.name}</h2>
      <p>Here&apos;s some stuff about <a onClick={categoryClick}>{props.name}</a></p>
      <div className={classnames('details', { 'hidden': hidingDetails })}>
        <p>Lot&apos;s of cool stuff about {props.name}</p>
      </div>
    </div>
  )
}