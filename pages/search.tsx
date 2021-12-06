import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Search: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Google 2</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
	  
	  <Header />
    </div>
  )
}

export default Search
