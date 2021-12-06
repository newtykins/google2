import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import dummyResponse from '../data/dummyResponse.json';
import SearchResults from '../components/SearchResults';

interface SearchProps {
  children?: React.ReactNode;
  results?: any;
}

const Search: NextPage = ({ results }: SearchProps) => {
  const router = useRouter();
  console.log(results);

  return (
    <div>
      <Head>
        <title>{router.query.q} - Google 2 Search</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <SearchResults results={results} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const useDummyData = true;
  const startIndex = context.query.s || 0;

  // Make the search
  const data = useDummyData
    ? dummyResponse
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.APIKEY}&cx=${process.env.CONTEXTKEY}&q=${context.query.q}&start=${startIndex}`
      ).then((res) => res.json());

  // After the server has rendered the data, pass the results to the client
  return {
    props: {
      results: data,
    },
  };
};

export default Search;
