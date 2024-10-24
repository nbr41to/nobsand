import { getBooksByCategory } from '@/app/(general)/nextjs-app-router-architecture/server/books';

import { BookCard } from '../../components/BookCard';

export default async function Page() {
  const books = await getBooksByCategory('Fiction');

  return (
    <div className="flex flex-wrap gap-8 p-10">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
