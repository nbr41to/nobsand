import type { Metadata } from 'next';

import { getBookById } from '@/app/(general)/nextjs-app-router-architecture/server/books';

import { BookImage } from '../components/BookImage';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = Number(params.id);

  const book = await getBookById(id);

  return {
    title: `${book?.title || 'Books'} | nobsand`,
  };
}

export default async function Page({ params }: Props) {
  const id = Number(params.id);
  const book = await getBookById(id);

  if (!book) throw new Error('Book not found');

  return (
    <div className="flex gap-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">{book.title}</h2>
        <p className="font-bold">$200.00</p>
        <p>{book.description}</p>
      </div>
      <BookImage id={book.id} title={book.title} width={300} height={300} />
    </div>
  );
}
