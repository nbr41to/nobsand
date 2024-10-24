/* 未使用 */
/* 多分こんな感じの実装が良さそう */
import { Suspense } from 'react';

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();

  return data;
};

const PostViewer = async () => {
  const post = await getData();

  return (
    <div>
      <h3 className="text-xl font-bold">{post.title}</h3>
      <p className="mt-3">{post.body}</p>
    </div>
  );
};

export default function PostViewer2() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PostViewer />
    </Suspense>
  );
}
