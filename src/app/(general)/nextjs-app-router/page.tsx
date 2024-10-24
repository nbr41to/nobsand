import { Suspense } from 'react';
import { BsFillCarFrontFill } from 'react-icons/bs';

import { LazyComponent, LazySkelton } from '@/components/LazyComponent';

export default function NextjsAppRouterPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2>Root Page</h2>
      <BsFillCarFrontFill className="hover:text-red-500" size={80} />

      <hr />
      <Suspense fallback={<LazySkelton />}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
