import { Loader } from '@mantine/core';
import { Suspense } from 'react';

import { JsonViewer } from '@/components/JsonViewer';

import PhotoViewer from './components/PhotoViewer';
import PostViewer from './components/PostViewer';

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();

  return data;
};

export default async function PartialPrerenderingPage() {
  const todo = await getData();

  return (
    <div className="space-y-8">
      <div>
        <p>Todo</p>
        <JsonViewer data={todo} />
      </div>

      <div>
        <p>Post</p>
        <div className="flex h-[194px] gap-8 rounded border p-4">
          <Suspense
            fallback={
              <div className="grid h-40 w-40 flex-none place-content-center">
                <Loader />
              </div>
            }
          >
            <PhotoViewer />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <PostViewer />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
