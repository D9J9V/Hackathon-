import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Gear Hackathon 2022</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <div className={styles.card}>
            <h1 className={inter.className}>
              Decentralized Diary.
            </h1>
          </div>
        
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/logo_diary.png"
            alt=""
            width={400}
            height={400}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="/join"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Embark on the adventure <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Create an account today!
            </p>
            <p className={inter.className}>
              With the help of Polkadot.
            </p>
          </a>

          <a
            href="/create"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Begin a new chapter <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Write a new entry. Create unique art.
            </p>
            <p className={inter.className}>  
              Easier than ever.
            </p>
          </a>

          <a
            href="/principal"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Relive the journey, together <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Share your creations (and nostalgia) with your friends and family.
            </p>
          </a>
        </div>
        <a
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
        </a>

        <div className={styles.card}>
            <h1 className={inter.className}>
              Memories captured forever. Thoughts made into art.
            </h1>
        </div>
        <div className={styles.card}>
          <h3 className={inter.className}>
            Decentralized Diary, created in the 1er Hackathon Web3 Universitario en México 2022.
          </h3>
        </div>
      </main>
    </>
  )
}