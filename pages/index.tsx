import type { NextPage } from 'next'
import Head from 'next/head'
import Avatar from '../components/Avatar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Googol!</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          {/* These will not be real links, as there are no other pages to this web app! */}
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* todo: Icon */}

          <Avatar url="https://github.com/newtykins.png" />
        </div>
      </header>
    </div>
  )
}

export default Home
