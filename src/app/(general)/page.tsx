import clsx from 'clsx';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import { FaQuestion } from 'react-icons/fa6';

import { getFileNames } from '@/utils/getPathnames';

export default async function Home() {
  const fileList = await getFileNames();

  return (
    <div className="">
      <h1 className="flex items-center justify-center gap-1 py-6 font-mono text-2xl font-bold">
        <FaQuestion className="text-teal-500 dark:text-teal-300" />
        Please select something to play.
      </h1>
      <div className="mx-auto flex w-fit flex-col gap-2">
        {fileList.map((file) => (
          <Link
            key={file}
            className={clsx([
              'group flex items-center gap-2 font-mono text-2xl font-bold',
              'hover:text-teal-500 dark:hover:text-teal-300',
              'focus:text-teal-500 focus:outline-none dark:focus:text-teal-300',
            ])}
            href={`/${file}`}
          >
            <FaChevronRight
              className="invisible group-hover:visible group-focus:visible"
              size={20}
            />
            ~/{file}/
          </Link>
        ))}
      </div>
    </div>
  );
}
