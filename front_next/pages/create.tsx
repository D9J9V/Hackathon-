import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })


export default function create (){
    return (
        <>
        <Head>
            <title>Gear Hackathon 2022</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        

        <main className={styles.main}>
            <Image className={styles.logo}
                src="/logo_diary.png"
                alt=""
                width={100}
                height={100}
            />
            <div className={styles.card}>
                <a
                    href="/principal"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <h1 className={inter.className}>
                    Decentralized Diary
                </h1>
                </a>
            </div>
            <div className={styles.card}>
                <h2 className={inter.className}>
                    Title:
                </h2>
                <input type="text" id="title" name="Title" maxlength="50"></input>
                <p className={inter.className}>
                    Your title must be 50 characters maximum.
                </p>
                <h2 className={inter.className}>
                    Share your story.
                </h2>
                <textarea id="freeform" name="freeform" rows="4" cols="50">
                    write here :-)
                </textarea>

                <p className={inter.className}>
                    Tag the people you want to share this memory with.
                </p>
                <input type="text" id="tags" name="Tags" maxlength="50"></input>
                
            </div>
            
                <div className={styles.card}>
                <a></a>
                <a
                    href="/demo1"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <h2 className={inter.className}>
                    Send <span>-&gt;</span>
                </h2>
                </a>                
          </div>
            </main></>
    )
}