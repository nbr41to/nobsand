import { Suspense } from 'react';

import { IncrementalStaticRegeneration } from '@/app/static-site-generation/components/IncrementalStaticRegeneration';
import { ServerSideRendering } from '@/app/static-site-generation/components/ServerSideRendering';
import { StaticSiteGeneration } from '@/app/static-site-generation/components/StaticSiteGeneration';

export default async function StaticSiteGenerationPage() {
  return (
    <div className="space-y-6">
      <Suspense fallback={<div>StaticSiteGeneration is loading...</div>}>
        <StaticSiteGeneration />
      </Suspense>
      <Suspense fallback={<div>ServerSideRendering is loading...</div>}>
        <ServerSideRendering />
      </Suspense>
      <Suspense
        fallback={<div>IncrementalStaticRegeneration is loading...</div>}
      >
        <IncrementalStaticRegeneration />
      </Suspense>
    </div>
  );
}
