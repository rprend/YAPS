import { useState } from "react"
import classnames from "classnames"

export interface CategoryProps {
  children: JSX.Element
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
      <p className={classnames({"expanded": !hidingDetails})}><a onClick={categoryClick}>{props.name} details</a></p>
      <div className={classnames('details', { 'hidden': hidingDetails })}>
        {props.children}
      </div>
    </div>
  )
}