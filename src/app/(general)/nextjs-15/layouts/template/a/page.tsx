import { Suspense } from 'react';

import { LazyComponent } from '../../_components/LazyComponent';

export default function Page() {
  return (
    <div className="rounded border p-8">
      <h2>a </h2>

      <Suspense fallback={<div>loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
