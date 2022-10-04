import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ryan from '../public/ryan.jpg'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ponde.me</title>
        <meta name="description" content="making things work" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main> 
        <div className={styles.content}>
          <Image
          src={ryan}
          alt="Ponde.me"
          width={250}
          height={250}
          />
          <h1>hi im ryan</h1>

          <p>Here's a bio about me, because this website is about me. Here are some things im working on: </p>
          
          <ul>
            <li>coding</li> 
            <li>music</li>
            <li>writing</li>

          </ul>
          
        </div>

      </main>

      <div className={styles.sidebar}>
        <p>What's up </p>
      </div>

    </div>
  )
}
