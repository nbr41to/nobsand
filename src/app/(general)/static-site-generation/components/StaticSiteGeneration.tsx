import { RefreshButton } from '@/app/(general)/static-site-generation/components/RefreshButton';
import { CodeBlock } from '@/components/CodeBlock';
import { JsonViewer } from '@/components/JsonViewer';

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

export const StaticSiteGeneration = async () => {
  const data = await getTime();

  return (
    <div className="space-y-2">
      <h2 className="text-2xl">StaticSiteGeneration Component</h2>
      <p>GET METHOD</p>
      <CodeBlock>
        {`const getTime = async () => {
  const response = await fetch(
    'http://worldtimeapi.org/api/timezone/Asia/Tokyo',
  );
  const data = await response.json();

  return data;
};`}
      </CodeBlock>
      <p>response</p>
      <JsonViewer data={data} />
      <RefreshButton />
    </div>
  );
};
