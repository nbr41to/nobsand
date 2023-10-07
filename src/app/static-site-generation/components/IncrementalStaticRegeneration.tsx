import { CodeBlock } from '@/components/CodeBlock';
import { JsonViewer } from '@/components/JsonViewer';

export const revalidate = 60; // 1分ごとに再生成する
const getTime = async () => {
  const response = await fetch(
    'http://worldtimeapi.org/api/timezone/Asia/Tokyo',
  );
  const data = await response.json();

  return {
    datetime: data.datetime,
    unixtime: data.unixtime,
  };
};

export const IncrementalStaticRegeneration = async () => {
  const data = await getTime();

  return (
    <div className="space-y-2">
      <h2 className="text-2xl">IncrementalStaticRegeneration Component</h2>
      <p>GET METHOD</p>
      <CodeBlock>
        {`export const revalidate = 60; // 1分ごとに再生成する
const getTime = async () => {
  const response = await fetch(
    'http://worldtimeapi.org/api/timezone/Asia/Tokyo',
  );
  const data = await response.json();

  return data;
};`}
      </CodeBlock>
      <p>response</p>
      <JsonViewer data={data} />
    </div>
  );
};
