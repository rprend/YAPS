import Image from 'next/image'
import ryan from '../public/ryan.jpg'
import { PageType } from './pages'
import classnames from 'classnames'
import Link from 'next/link'

export interface SidebarProps {
  setPage(page: PageType): void
  page: PageType
}

export default function Sidebar(props: SidebarProps): JSX.Element {
  function changePage(page: PageType) {
    props.setPage(page)
  }

  return (
    <div className="sidebar">
      <div className="image-container">
        <Image
          className='ryan-image'
          src={ryan}
          alt="Ponde.me"
          width={80}
          height={80}
        />
      </div>
      <div className='sidebar-links'>
        <div><a
          onClick={() => changePage('home')}
          className={classnames({selected: props.page === 'home'})}
        >home</a></div>
        <div><a
          onClick={() => changePage('contact')}
          className={classnames({selected: props.page === 'contact'})}
        >contact</a></div>
        <div>
          <a
          onClick={() => changePage('blog')}
          className={classnames({selected: props.page === 'blog'})}
        >blog</a>
        </div>
      </div>
    </div>
  )
}