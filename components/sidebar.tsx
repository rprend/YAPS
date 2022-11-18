import Image from 'next/image'
import Link from 'next/link'
import ryan from '../public/ryan.jpg'

export default function Sidebar(): JSX.Element {
  return (
    <div className="left-bar">
      <Image
        className='ryan-image'
        src={ryan}
        alt="Ponde.me"
        width={80}
        height={80}
      />
      <Link href="/">home</Link>
      <p>contact</p>
      <Link href="/blog">blog</Link>
    </div>
  )
}