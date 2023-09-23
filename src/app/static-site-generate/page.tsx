import { JsonViewer } from '@/components/JsonViewer';

const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();

  return data;
};

export default async function StaticSiteGeneratePage() {
  const data = await getData();

  return (
    <div>
      <h2>Next.jsのApp RouterのSSGの検証ページ</h2>
      <JsonViewer data={data} />
    </div>
  );
}
