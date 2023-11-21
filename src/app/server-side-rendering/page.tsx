// export const dynamic = 'force-static';
// export const fetchCache = 'force-cache';

import { InlineCodeHighlight } from '@mantine/code-highlight';
import { Suspense } from 'react';

import { CodeBlock } from '@/components/CodeBlock';

import { ForceCacheDateTime } from './components/ForceCacheDateTime';
import { NoStoreDateTime } from './components/NoStoreDateTime';
import { RefreshButton } from './components/RefreshButton';

const getDateTime = async () => {
  const response = await fetch(
    'http://worldtimeapi.org/api/timezone/Asia/Tokyo',
    { cache: 'force-cache' }, // default
  );
  const data = await response.json();

  return `${data.datetime}(${data.unixtime})`;
};

const getDateTimeNoStore = async () => {
  const response = await fetch(
    'http://worldtimeapi.org/api/timezone/Asia/Tokyo',
    { cache: 'no-store' }, // SSRしたい場合はキャッシュを無効化する
    // https://nextjs.org/docs/app/api-reference/functions/fetch#optionscache
  );
  const data = await response.json();

  return `${data.datetime}(${data.unixtime})`;
};

export default async function ServerSideRenderingPage() {
  const time = await getDateTime();
  const timeNoStore = await getDateTimeNoStore();

  return (
    <div className="space-y-4">
      <h2>Next.jsのApp RouterでSSRがしたい</h2>
      <p>ようは動的なデータを扱いたい</p>

      <RefreshButton />

      <div className="flex justify-center gap-6">
        <div>
          <h3 className="flex items-center gap-2 text-2xl">
            SSG {'->'}
            <InlineCodeHighlight
              language="plaintext"
              code={time}
              styles={{
                code: {
                  fontSize: 20,
                  fontWeight: 600,
                },
              }}
            />
          </h3>
          <CodeBlock>
            {`// page.tsx
const getDateTime = async () => {
  const response = await fetch(
    'http://worldtimeapi.org/api/timezone/Asia/Tokyo',
    { cache: 'force-cache' }, // default
  );
  const data = await response.json();

  return \`\${data.datetime}(\${data.unixtime})\`;
};`}
          </CodeBlock>
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-2xl">
            SSR {'->'}
            <InlineCodeHighlight
              language="plaintext"
              code={timeNoStore}
              styles={{
                code: {
                  fontSize: 20,
                  fontWeight: 600,
                },
              }}
            />
          </h3>
          <CodeBlock>
            {`// page.tsx
const getDateTimeNoStore = async () => {
  const response = await fetch(
    'http://worldtimeapi.org/api/timezone/Asia/Tokyo',
    { cache: 'no-store' }, // SSRしたい場合はキャッシュを無効化する
    );
    const data = await response.json();
    
    return \`\${data.datetime}(\${data.unixtime})\`;
  };`}
          </CodeBlock>
        </div>
      </div>

      <div className="flex justify-center gap-6">
        <Suspense fallback={<div>loading...</div>}>
          <ForceCacheDateTime />
        </Suspense>
        <Suspense fallback={<div>loading...</div>}>
          <NoStoreDateTime />
        </Suspense>
      </div>
    </div>
  );
}
