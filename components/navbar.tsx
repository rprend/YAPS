import Link from 'next/link'

export interface NavbarProps {
  showBackButton?: boolean
}

export default function Navbar(props: NavbarProps): JSX.Element {

  return (
    <header className="flex align-center items-center h-16 justify-between mb-12">
    {props.showBackButton && (
      <p><Link href="/">&larr; back</Link></p>
    )}
    {!props.showBackButton && (
      <p className="">prendergast.dev</p>
    )}
    <div className="flex flex-row space-x-4">
      <Link href="/">home</Link>
      <Link href="/blog">blog</Link>
      <Link href="/contact">contact</Link>
    </div>
    </header>
  )
}