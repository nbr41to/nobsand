import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h2>Next.js 15 から 理解しよう</h2>
      <div>
        <Link className="hover:underline" href="/nextjs-15/layouts">
          layout.jsとtemplate.jsの違い
        </Link>
        <p></p>
        <p>response cacheについて</p>
        <p>page cacheについて</p>
        <p>page cacheについて</p>
      </div>
    </div>
  );
}
