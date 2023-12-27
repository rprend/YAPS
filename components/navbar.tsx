import Link from 'next/link'

export interface SidebarProps {
}

export default function Navbar(): JSX.Element {

  return (
    <header className="flex align-center items-center h-16 justify-between mb-12">
    <h1 className="">prendergast.dev</h1>
      <div className="flex flex-row space-x-4">
        <Link href="/">home</Link>
        <Link href="/blog">blog</Link>
        <Link href="/contact">contact</Link>
      </div>
    </header>
  )
}