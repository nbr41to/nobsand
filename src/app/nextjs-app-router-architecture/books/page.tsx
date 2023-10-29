import { getBooksAll } from '@/app/nextjs-app-router-architecture/server/books';

import { BookCard } from './components/BookCard';

export default async function Page() {
  const books = await getBooksAll();

  return (
    <div className="flex flex-wrap gap-8 p-10">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
      <BookCard
        book={{
          id: 99,
          title: 'No title',
          description: 'No exist book',
          category: 'No category',
        }}
      />
    </div>
  );
}
