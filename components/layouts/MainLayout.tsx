import NavBar from "../NavBar"
import Head from 'next/head'
import styles from "./Layout.module.css"

const MainLayout = ( { children }:{ children: JSX.Element } ) => {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>
        { children }
      </main>
      
    </div>
    </>
  )
}

export default MainLayout