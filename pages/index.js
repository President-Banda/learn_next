import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import { server } from '../config'

export default function Home({articles}) {
  //console.log(articles);
  return (
    <div>
      <Head>
        <title>
        Learning Is Fun
        <meta name='keywords' content='web development, programming' />
        </title>
      </Head>
      {/* <h1>Welcome To Next</h1> */}
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async() => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return{
    props:{
      articles
    }
  }
    
}
// There are three ways to fetch data/props
// 1. getStaticProps - this is done at build time
// 2. getServerSideProps -  this allows us to fetch data on every request (slower)
// 3. getStaticPaths - allows us to use dynamic paths based on the data we are fetching / dynamically generate paths based on data being fetched
  