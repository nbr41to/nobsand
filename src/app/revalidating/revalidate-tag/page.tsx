import { InlineCodeHighlight } from '@mantine/code-highlight';

import { CodeBlock } from '@/components/CodeBlock';

import { RevalidateButton } from '../components/RevalidateButton';

const getDateTimeLondon = async () => {
  const response = await fetch(
    'http://worldtimeapi.org/api/timezone/Europe/London',
    {
      cache: 'force-cache', // これないと常時再検証される
      next: {
        tags: ['london'],
      },
    },
  );
  const data = await response.json();

  return `${data.datetime}(${data.unixtime})`;
};

const getDateTimeSydney = async () => {
  const response = await fetch(
    'http://worldtimeapi.org/api/timezone/Australia/Sydney',
    {
      cache: 'force-cache', // これないと常時再検証される
      next: {
        tags: ['sydney'],
      },
    },
  );
  const data = await response.json();

  return `${data.datetime}(${data.unixtime})`;
};

export default async function RevalidatingPage() {
  const timeLondon = await getDateTimeLondon();
  const timeSydney = await getDateTimeSydney();

  return (
    <div>
      <h2 className="py-3 text-2xl font-bold">revalidateTagで再検証させる</h2>
      <h3 className="flex items-center gap-2 text-2xl">
        London {'->'}
        <InlineCodeHighlight
          language="plaintext"
          code={timeLondon}
          styles={{
            code: {
              fontSize: 20,
              fontWeight: 600,
            },
          }}
        />
        <RevalidateButton tag="london" />
      </h3>
      <h3 className="flex items-center gap-2 text-2xl">
        Sydney {'->'}
        <InlineCodeHighlight
          language="plaintext"
          code={timeSydney}
          styles={{
            code: {
              fontSize: 20,
              fontWeight: 600,
            },
          }}
        />
        <RevalidateButton tag="sydney" />
      </h3>
      <p>data fetch function</p>
      <CodeBlock>
        {`// page.tsx
const getDateTimeLondon = async () => {
  const response = await fetch(
    'http://worldtimeapi.org/api/timezone/Europe/London',
    {
      cache: 'force-cache', // これないと常時再検証される
      next: {
        tags: ['london'],
      },
    },
  );
  const data = await response.json();

  return \`\${data.datetime}(\${data.unixtime})\`;
};

const getDateTimeSydney = async () => {
  const response = await fetch(
    'http://worldtimeapi.org/api/timezone/Australia/Sydney',
    {
      cache: 'force-cache', // これないと常時再検証される
      next: {
        tags: ['sydney'],
      },
    },
  );
  const data = await response.json();

  return \`\${data.datetime}(\${data.unixtime})\`;
};`}
      </CodeBlock>
      <p>revalidate button</p>
      <CodeBlock>
        {`// RevalidateButton.tsx
import { Button } from '@mantine/core';
import { revalidateTag } from 'next/cache';

export const RevalidateButton = ({ tag }: { tag: string }) => {
  const revalidate = async () => {
    'use server';
    revalidateTag(tag);
  };

  return (
    <form action={revalidate}>
      <Button type="submit">{\`revalidateTag(\${tag})\`}</Button>
    </form>
  );
};`}
      </CodeBlock>
    </div>
  );
}
