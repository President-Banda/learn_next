import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>
        Learning Is Fun
        <meta name='keywords' content='web development, programming' />
        </title>
      </Head>
      <h1>Welcome To Next</h1>
    </div>
  )
}

// There are three ways to fetch data/props
// 1. getStaticProps - this is done at build time
// 2. getServerSideProps -  this allows us to fetch data on every request (slower)
// 3. getStaticPaths - allows us to use dynamic paths based on the data we are fetching / dynamically generate paths based on data being fetched
  