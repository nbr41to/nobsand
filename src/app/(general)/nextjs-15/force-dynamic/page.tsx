import { Suspense } from 'react';

import { TimeForceCache } from './_components/TimeForceCache';
import { TimeNoStore } from './_components/TimeNoStore';
import { TimeRevalidate } from './_components/TimeRevalidate';

export const dynamic = 'force-static';

export default async function Page() {
  const response = await fetch('http://localhost:3000/api/get-time');
  const data = await response.json();

  return (
    <div>
      <h2>response cacheについて</h2>
      <h2>{`export const dynamic = 'force-dynamic';`}のページ</h2>
      <div>raw data: {data.time}</div>
      <div>
        <TimeForceCache />
        <Suspense fallback={<div>Loading...</div>}>
          <TimeNoStore />
        </Suspense>
        <TimeRevalidate />
        <TimeForceCache />
        {/* <TimeNoStore /> */}
        <TimeRevalidate />
      </div>
    </div>
  );
}
