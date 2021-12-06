import { useRouter } from 'next/router';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const PaginationButtons = () => {
  const router = useRouter();
  const startIndex = Number(router.query.s) || 0;

  return (
    <div className="flex max-w-lg justify-between text-blue-700 mb-10">
      {startIndex >= 10 && (
        <Link
          href={`/search?q=${router.query.q}&s=${startIndex - 10}`}
          passHref
        >
          <div className="pgbtn">
            <ChevronLeftIcon className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}

      <Link href={`/search?q=${router.query.q}&s=${startIndex + 10}`} passHref>
        <div className="pgbtn">
          <ChevronRightIcon className="h-5" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
};

export default PaginationButtons;
