import { Suspense } from 'react';

import { AustraliaDateTime } from '@/app/server-side-rendering/components/AustraliaDateTime';
import { RefreshButton } from '@/app/server-side-rendering/components/RefreshButton';
import { TokyoDateTime } from '@/app/server-side-rendering/components/TokyoDateTime';

// export const dynamic = 'force-static';
// export const fetchCache = 'force-cache';

export default function ServerSideRenderingPage() {
  return (
    <div className="space-y-4">
      <Suspense fallback={<div>loading...</div>}>
        <TokyoDateTime />
        <RefreshButton />
      </Suspense>
      <Suspense fallback={<div>loading...</div>}>
        <AustraliaDateTime />
        <RefreshButton />
      </Suspense>
    </div>
  );
}
