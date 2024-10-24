import { Suspense } from 'react';

import { ClientComponent } from '@/app/(general)/nextjs-app-router/thunder/components/ClientComponent';
import { ServerComponent } from '@/app/(general)/nextjs-app-router/thunder/components/ServerComponent';

export default function ThunderPage() {
  return (
    <div>
      <div className="text-center text-8xl">
        ⚡️... <span className="text-3xl">🚗</span> 😱
      </div>
      <div className="mt-8 flex justify-center gap-4">
        <ClientComponent />
        <Suspense
          fallback={
            <div className="grid h-48 w-48 animate-pulse place-content-center rounded border">
              loading...
            </div>
          }
        >
          <ServerComponent />
        </Suspense>
      </div>
    </div>
  );
}
