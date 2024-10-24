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
        <p>
          <Link className="hover:underline" href="/nextjs-15/cache">
            response cacheについて
          </Link>
        </p>
        <p>
          <Link className="hover:underline" href="/nextjs-15/cache">
            response cacheについて（force-static）
          </Link>
        </p>
        <p>
          <Link className="hover:underline" href="/nextjs-15/force-dynamic">
            response cacheについて（force-dynamic）
          </Link>
        </p>
        <p>page cacheについて</p>
        <p>page cacheについて</p>
      </div>
    </div>
  );
}
