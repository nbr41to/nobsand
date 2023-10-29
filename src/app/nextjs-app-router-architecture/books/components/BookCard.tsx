import Link from 'next/link';
import { type FC } from 'react';

import { BookImage } from './BookImage';

type Props = {
  book: {
    id: number;
    title: string;
    description: string;
    category: string;
  };
};

export const BookCard: FC<Props> = ({ book }) => {
  return (
    <Link
      className="space-y-2"
      href={`/nextjs-app-router-architecture/books/${book.id}`}
    >
      <BookImage id={book.id} title={book.title} width={200} height={200} />
      <div className="w-[200px] space-y-1">
        <h3 className="overflow-hidden text-ellipsis whitespace-nowrap text-xl font-bold">
          {book.title}
        </h3>
        <p className="line-clamp-3">{book.description}</p>
        <p className="font-bold">category: {book.category}</p>
      </div>
    </Link>
  );
};
