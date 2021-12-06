import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

const Header = () => {
  const router = useRouter();
  const searchQueryReference = useRef<HTMLInputElement>(null);

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
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => router.push('/')}
          alt="Google"
        />

        <form className="flex border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5 flex-grow">
          <input
            type="text"
            ref={searchQueryReference}
            className="flex-grow w-full focus:outline-none"
            defaultValue={router.query.q}
          />

          <XIcon
            className="h-7 text-gray-500 cursor-pointer transition hover:scale-125 sm:mr-3"
            onClick={() => {
              (searchQueryReference.current as HTMLInputElement).value = '';
            }}
          />

          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />

          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />

          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>

        <Avatar url="https://github.com/newtykins.png" className="ml-auto" />
      </div>

      <HeaderOptions />
    </header>
  );
};

export default Header;
