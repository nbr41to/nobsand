import { InlineCodeHighlight } from '@mantine/code-highlight';

import { CodeBlock } from '@/components/CodeBlock';

const getDateTime = async () => {
  const response = await fetch(
    'http://worldtimeapi.org/api/timezone/Asia/Tokyo',
    { cache: 'force-cache' }, // default
  );
  const data = await response.json();

  return `${data.datetime}(${data.unixtime})`;
};

export const ForceCacheDateTime = async () => {
  const time = await getDateTime();

  return (
    <div>
      <h3 className="flex items-center gap-2 text-2xl">
        ForceCacheDateTime {'->'}
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
        {`// ForceCacheDateTime.tsx
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
  );
};
