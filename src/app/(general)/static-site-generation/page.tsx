import { Suspense } from 'react';

import { IncrementalStaticRegeneration } from '@/app/(general)/static-site-generation/components/IncrementalStaticRegeneration';
import { StaticSiteGeneration } from '@/app/(general)/static-site-generation/components/StaticSiteGeneration';
import { CodeBlock } from '@/components/CodeBlock';

const getTime = async () => {
  const response = await fetch(
    'http://worldtimeapi.org/api/timezone/Asia/Tokyo',
    {
      next: {
        revalidate: 30, // データの再検証時間（秒単位）
      },
    },
  );
  const data = await response.json();

  return {
    datetime: data.datetime,
    unixtime: data.unixtime,
  };
};

export default async function StaticSiteGenerationPage() {
  const isrTime = await getTime();

  return (
    <div className="space-y-6">
      <Suspense fallback={<div>StaticSiteGeneration is loading...</div>}>
        <StaticSiteGeneration />
      </Suspense>
      {/* <Suspense fallback={<div>ServerSideRendering is loading...</div>}>
        <ServerSideRendering />
      </Suspense> */}
      <Suspense
        fallback={<div>IncrementalStaticRegeneration is loading...</div>}
      >
        <IncrementalStaticRegeneration />
      </Suspense>
      <p>page.tsx ISR</p>
      <CodeBlock>{JSON.stringify(isrTime, null, 2)}</CodeBlock>
    </div>
  );
}
