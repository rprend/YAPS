import classnames from 'classnames'

export interface ContactProps {
  showing: boolean
}

export default function Contact(props: ContactProps): JSX.Element {
  return (
    <div className={classnames({"contact": true, "hidden": !props.showing})}>
      <h1>Contact</h1>
    </div>
  )
}