import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Avatar from '../components/Avatar';
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import { useRef } from 'react';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const searchQueryReference = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const search = (e: React.MouseEvent<HTMLElement>) => {
    // Stop the default behaviour of the buttons
    e.preventDefault();

    // Fetch the current search query
    const { value: searchQuery } =
      searchQueryReference.current as HTMLInputElement;

    // If there is no text in the search query, do nothing
    if (!searchQuery) return;

    // Otherwise, search for the result
    router.push(`/search?q=${searchQuery}`);
  };

  return (
    <div>
      <Head>
        <title>Google 2</title>
        <link rel="icon" href="/favicon.png" />
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

          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          <Avatar url="https://github.com/newtykins.png" />
        </div>
      </header>

      <form className="flex flex-col items-center mt-44 flex-grow">
        {/* Google Icon */}
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
          height={100}
          width={300}
        />

        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />

          <input
            type="text"
            className="focus:outline-none flex-grow"
            ref={searchQueryReference}
          />

          <MicrophoneIcon className="h-5" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={search} className="btn">
            I'm Feeling Lucky
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
