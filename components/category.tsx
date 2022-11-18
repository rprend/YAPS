export interface CategoryProps {
  name: string
}

export function Category(props: CategoryProps): JSX.Element {
  function categoryClick() {
    console.log('clicked')
  }

  return (
    <div className={`category ${props.name}`}>
      <h2>{props.name}</h2>
      <p>Here&apos;s some stuff about <a onClick={categoryClick}>{props.name}</a></p>
    </div>
  )
}