import Layout from '../components/Layout'
import '../styles/globals.css'
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
