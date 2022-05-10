import Head from "next/head"
import { useEffect } from "react"

const Home = () => {
  useEffect(() => {
    import("../components/user-card")
  }, [])

  return (
    <div>
      <Head>
        <title>Lit Project</title>
        <meta name="description" content="Learning Lit" />
        <link rel="icon" href="/favicon.ico" />
        UserCard
      </Head>

      <main>
        <h1>Hello</h1>
        <user-card />
      </main>
      <footer></footer>
    </div>
  )
}
export default Home
